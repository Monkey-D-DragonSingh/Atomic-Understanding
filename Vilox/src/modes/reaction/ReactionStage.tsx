import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, useBounds, OrbitControls, Html } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';
import { MOLECULES } from '../../data/molecules';
import { CPK_COLORS, COVALENT_RADII } from '../../data/constants';
import { Molecule } from '../../types';
import { ReactionParticipant } from '../../types/curatedReaction';
import { SceneEnvironment } from '../../components/three/SceneEnvironment';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { parseFormula } from '../../lib/parseFormula';
import * as THREE from 'three';

const ANIMATION_DURATION = 2000; // ms — keep in sync with the playback timer below

/** Smoothstep easing so opacity/scale transitions feel organic rather than linear. */
function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function FitBounds() {
  const bounds = useBounds();
  useEffect(() => {
    bounds.refresh().fit();
  }, [bounds]);
  return null;
}

interface StageSpecies {
  participant: ReactionParticipant;
  molecule: Molecule;
}

/**
 * A single molecular species rendered as real 3D geometry (CPK spheres + bonds).
 * Opacity drives the in/out crossfade during the reaction animation.
 */
function StageMolecule({ molecule, opacity }: { molecule: Molecule; opacity: number }) {
  const atoms = molecule.atoms;
  const bonds = molecule.bonds;
  const o = Math.max(0, opacity);

  return (
    <group>
      {atoms.map((a) => (
        <mesh key={a.id} position={[a.x, a.y, a.z]}>
          <sphereGeometry args={[(COVALENT_RADII[a.element] || 70) / 100 * 0.35, 20, 20]} />
          <meshStandardMaterial
            color={CPK_COLORS[a.element] || '#FF1493'}
            opacity={o}
            transparent={o < 1}
            roughness={0.35}
            metalness={0.05}
            emissive={o > 0.95 ? CPK_COLORS[a.element] || '#FFFFFF' : '#000000'}
            emissiveIntensity={o > 0.95 ? 0.35 : 0}
          />
        </mesh>
      ))}

      {bonds.map((b, i) => {
        const from = atoms.find((x) => x.id === b.from);
        const to = atoms.find((x) => x.id === b.to);
        if (!from || !to) return null;
        const p1 = new THREE.Vector3(from.x, from.y, from.z);
        const p2 = new THREE.Vector3(to.x, to.y, to.z);
        const dir = p2.clone().sub(p1);
        const len = dir.length();
        if (len === 0) return null;
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        const perp = new THREE.Vector3(1, 0, 0).applyQuaternion(quat).normalize();
        const order = Math.min(3, Math.max(1, Math.round(b.order)));
        const lines = [];
        for (let j = 0; j < order; j++) {
          const pos = mid.clone();
          if (order === 2) pos.add(perp.clone().multiplyScalar(j === 0 ? 0.12 : -0.12));
          if (order === 3) {
            if (j === 0) pos.add(perp.clone().multiplyScalar(0.12));
            if (j === 2) pos.add(perp.clone().multiplyScalar(-0.12));
          }
          lines.push(
            <mesh key={`b-${i}-${j}`} position={pos} quaternion={quat} scale={[1, len, 1]}>
              <cylinderGeometry args={[0.045, 0.045, 1, 10]} />
              <meshStandardMaterial color="#9CA3AF" opacity={o} transparent roughness={0.4} />
            </mesh>
          );
        }
        return (
          <group key={`b-${i}`}>
            {lines}
          </group>
        );
      })}
    </group>
  );
}

export function ReactionStage() {
  const { activeCuratedReaction } = useAppStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const rafRef = useRef<number>();

  // Reset animation when reaction changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, [activeCuratedReaction]);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = performance.now() - progress * ANIMATION_DURATION;

    const animate = (time: number) => {
      let p = (time - startTime) / ANIMATION_DURATION;
      if (p > 1) p = 1;
      setProgress(p);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, progress]);

  // Resolve the actual 3D molecules for each side of the reaction.
  const stageSpecies = useMemo(() => {
    if (!activeCuratedReaction) return { reactants: [] as StageSpecies[], products: [] as StageSpecies[] };

    const resolve = (p: ReactionParticipant): StageSpecies | null => {
      let molecule: Molecule | null = null;
      if (p.moleculeId) {
        molecule = MOLECULES.find((m) => m.id === p.moleculeId) ?? null;
      }
      if (!molecule) {
        // Fallback for element-only participants (e.g. Na, Zn, Fe, Mg, Al, Cu, Ag):
        // render them as a single atom so the stage still shows the species.
        const sym = /^([A-Z][a-z]?)/.exec(p.formula.trim())?.[1];
        if (!sym) return null;
        molecule = {
          id: `stage-atom-${p.formula}-${p.coefficient}`,
          name: `${sym} atom`,
          formula: p.formula,
          hillFormula: p.formula,
          molarMass: 0,
          category: 'element',
          bondType: 'covalent',
          geometry: 'atomic',
          hybridization: 'none',
          bondAngle: 'N/A',
          polarity: 'nonpolar',
          dipoleMoment: null,
          standardState: p.state === 's' ? 'solid' : p.state === 'l' ? 'liquid' : p.state === 'g' ? 'gas' : 'liquid',
          meltingPoint: null,
          boilingPoint: null,
          uses: '',
          fact: '',
          atoms: [{ id: 1, element: sym, x: 0, y: 0, z: 0 }],
          bonds: [],
        };
      }
      if (!molecule.atoms || molecule.atoms.length === 0) return null;
      return { participant: p, molecule };
    };

    const reactants = activeCuratedReaction.reactants
      .map(resolve)
      .filter((x): x is StageSpecies => x !== null);
    const products = activeCuratedReaction.products
      .map(resolve)
      .filter((x): x is StageSpecies => x !== null);

    return { reactants, products };
  }, [activeCuratedReaction]);

  // Compute Conservation Banner
  const conservation = useMemo(() => {
    if (!activeCuratedReaction) return null;

    const left: Record<string, number> = {};
    const right: Record<string, number> = {};

    activeCuratedReaction.reactants.forEach((r) => {
      const parts = parseFormula(r.formula);
      for (const [sym, count] of Object.entries(parts)) {
        left[sym] = (left[sym] || 0) + count * r.coefficient;
      }
    });

    activeCuratedReaction.products.forEach((p) => {
      const parts = parseFormula(p.formula);
      for (const [sym, count] of Object.entries(parts)) {
        right[sym] = (right[sym] || 0) + count * p.coefficient;
      }
    });

    const formatCounts = (record: Record<string, number>) =>
      Object.entries(record)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([sym, count]) => `${count}${sym}`)
        .join(' ');

    const leftStr = formatCounts(left);
    const rightStr = formatCounts(right);
    const isBalanced = leftStr === rightStr;

    return { leftStr, rightStr, isBalanced };
  }, [activeCuratedReaction]);

  if (!activeCuratedReaction) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-bg relative">
        <div className="text-6xl mb-4 opacity-50">⚖️</div>
        <h2 className="text-xl font-bold text-text-dim">Select a Reaction</h2>
        <p className="text-text-dim text-sm text-center max-w-sm mt-2">
          Choose a reaction from the left panel to simulate its molecular rearrangement.
        </p>
      </div>
    );
  }

  const fade = smoothstep(progress); // 0 → reactants fully visible, → 1 products fully visible

  const renderSpecies = (
    side: 'reactant' | 'product',
    s: StageSpecies
  ) => {
    const opacity = side === 'reactant' ? 1 - fade : fade;
    const scale = side === 'reactant' ? 1 - 0.25 * progress : 0.7 + 0.3 * progress;
    const labelColor = CPK_COLORS[s.molecule.atoms.find((a) => a.element !== 'H')?.element ?? s.molecule.atoms[0]?.element ?? ''] ?? '#9CA3AF';
    const maxY = Math.max(...s.molecule.atoms.map((a) => a.y));
    const count = s.molecule.atoms.length;
    const centroidX = s.molecule.atoms.reduce((sum, a) => sum + a.x, 0) / count;
    const centroidZ = s.molecule.atoms.reduce((sum, a) => sum + a.z, 0) / count;

    if (opacity <= 0.05) return null;

    return (
      <group key={`${side}-${s.participant.formula}-${s.molecule.id}`} scale={scale}>
        <StageMolecule molecule={s.molecule} opacity={opacity} />
        <Html position={[centroidX, maxY + 0.55, centroidZ]} center className="pointer-events-none" zIndexRange={[100, 0]}>
          <div
            className="px-2.5 py-1 rounded-full bg-black/85 border text-[10px] font-bold tracking-wide whitespace-nowrap"
            style={{ borderColor: labelColor, color: labelColor }}
          >
            {s.molecule.formula}
          </div>
        </Html>
      </group>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-bg relative overflow-hidden">
      {/* Header / Equation */}
      <div className="p-6 text-center z-10 bg-gradient-to-b from-bg to-transparent">
        <div className="inline-block px-6 py-3 bg-black/40 border border-border rounded-2xl backdrop-blur">
          <h2 className="text-2xl font-mono font-bold text-text tracking-wider">
            {activeCuratedReaction.balancedEquation}
          </h2>
        </div>
      </div>

      {/* Conservation Banner */}
      {conservation && (
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur z-20 flex gap-4 ${
          conservation.isBalanced
            ? 'bg-green-500/10 border-green-500/30 text-green-400'
            : 'bg-red-500/10 border-red-500/30 text-red-400'
        }`}>
          <span>Left: {conservation.leftStr}</span>
          <span>Right: {conservation.rightStr}</span>
        </div>
      )}

      {/* 3D Stage Area */}
      <div className="flex-1 min-h-0 relative z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[100, 100, 100]} intensity={0.85} />
          <directionalLight position={[-100, -50, -100]} intensity={0.3} color="#4488ff" />

          <SceneEnvironment />

          <Bounds fit clip margin={1.2}>
            <FitBounds />
            {stageSpecies.reactants.map((s) => renderSpecies('reactant', s))}
            {stageSpecies.products.map((s) => renderSpecies('product', s))}
          </Bounds>

          <OrbitControls enableDamping dampingFactor={0.08} />
        </Canvas>

        {/* Hint */}
        {progress === 0 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-text-dim glass px-4 py-2 rounded-full pointer-events-none">
            Drag to orbit · Scroll to zoom · Press Play to run the simulation
          </div>
        )}
      </div>

      {/* Progress Bar background effect */}
      <div className="absolute bottom-0 left-0 h-1 bg-accent/20 transition-all duration-75" style={{ width: `${progress * 100}%` }} />

      {/* Controls */}
      <div className="p-6 flex justify-center gap-4 bg-gradient-to-t from-bg to-transparent z-10">
        <button
          onClick={() => {
            if (progress >= 1) setProgress(0);
            setIsPlaying(!isPlaying);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-bg rounded-xl font-bold hover:bg-accent/90 transition-transform active:scale-95 shadow-[0_0_20px_rgba(79,195,247,0.3)]"
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          {isPlaying ? 'Pause' : progress >= 1 ? 'Replay' : 'Play'}
        </button>
        <button
          onClick={() => {
            setIsPlaying(false);
            setProgress(0);
          }}
          className="p-3 bg-panel border border-border text-text hover:text-accent rounded-xl transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
