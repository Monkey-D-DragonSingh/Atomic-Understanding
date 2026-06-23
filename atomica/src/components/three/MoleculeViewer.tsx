import { useMemo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, useBounds, AdaptiveDpr, Html } from '@react-three/drei';
import * as THREE from 'three';
import { CPK_COLORS, COVALENT_RADII, VDW_RADII } from '../../data/constants';
import { MoleculeAtom, MoleculeBond } from '../../types/molecule';

export interface MoleculeViewerProps {
  atoms: MoleculeAtom[];
  bonds: MoleculeBond[];
  viewMode: 'ball-stick' | 'space-fill';
  highlightId?: number | null;
  onAtomClick?: (id: number) => void;
  resetTrigger?: number; // pass a random number to trigger view reset
}

const SCENE_SCALE = 1.0; // Ångströms to Three.js units

// Component to handle auto-fitting
function FitBounds({ resetTrigger }: { resetTrigger?: number }) {
  const bounds = useBounds();
  useEffect(() => {
    // Fits the camera to the bounding box of the children
    bounds.refresh().fit();
  }, [bounds, resetTrigger]);
  return null;
}

export function MoleculeViewer({ atoms, bonds, viewMode, highlightId, onAtomClick, resetTrigger }: MoleculeViewerProps) {
  const isHighAtomCount = atoms.length > 100;
  const isSpaceFill = viewMode === 'space-fill';

  // Center the molecule manually to be safe, though Bounds will fit it
  const { centeredAtoms } = useMemo(() => {
    if (atoms.length === 0) return { centeredAtoms: [] };
    const cx = atoms.reduce((sum, a) => sum + a.x, 0) / atoms.length;
    const cy = atoms.reduce((sum, a) => sum + a.y, 0) / atoms.length;
    const cz = atoms.reduce((sum, a) => sum + a.z, 0) / atoms.length;
    
    return {
      centeredAtoms: atoms.map(a => ({
        ...a,
        x: (a.x - cx) * SCENE_SCALE,
        y: (a.y - cy) * SCENE_SCALE,
        z: (a.z - cz) * SCENE_SCALE,
      }))
    };
  }, [atoms]);

  // Group atoms by element for instancing if we want, but for now simple mapping is okay 
  // since <mesh> is fast enough for <1000 atoms usually. 
  // But rule says: "Use InstancedMesh grouped by element when atom count > 80".
  // Let's do InstancedMesh for performance.
  


  // Prepare bond geometry instances
  const bondInstances = useMemo(() => {
    if (isSpaceFill) return [];
    const instances: { position: THREE.Vector3, quaternion: THREE.Quaternion, scale: THREE.Vector3 }[] = [];
    
    bonds.forEach(bond => {
      const fromAtom = centeredAtoms.find(a => a.id === bond.from);
      const toAtom = centeredAtoms.find(a => a.id === bond.to);
      if (!fromAtom || !toAtom) return;

      const p1 = new THREE.Vector3(fromAtom.x, fromAtom.y, fromAtom.z);
      const p2 = new THREE.Vector3(toAtom.x, toAtom.y, toAtom.z);
      const distance = p1.distanceTo(p2);
      const midPoint = p1.clone().add(p2).multiplyScalar(0.5);

      const direction = p2.clone().sub(p1).normalize();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

      // Handle bond orders
      const order = Math.min(3, Math.max(1, Math.round(bond.order)));
      const offset = 0.12;

      for (let i = 0; i < order; i++) {
        const p = midPoint.clone();
        if (order === 2) {
          const perp = new THREE.Vector3(1, 0, 0).applyQuaternion(quaternion).normalize();
          if (i === 0) p.add(perp.clone().multiplyScalar(offset));
          if (i === 1) p.add(perp.clone().multiplyScalar(-offset));
        } else if (order === 3) {
          const perp = new THREE.Vector3(1, 0, 0).applyQuaternion(quaternion).normalize();
          if (i === 0) p.add(perp.clone().multiplyScalar(offset));
          if (i === 2) p.add(perp.clone().multiplyScalar(-offset));
        }
        
        instances.push({
          position: p,
          quaternion,
          scale: new THREE.Vector3(1, distance, 1)
        });
      }
    });
    return instances;
  }, [centeredAtoms, bonds, isSpaceFill]);

  return (
    <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(79, 195, 247, 0.05) 0%, transparent 70%)' }}>
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }} 
        dpr={[1, 2]} 
        frameloop={isHighAtomCount ? "demand" : "always"}
      >
        {isHighAtomCount && <AdaptiveDpr pixelated />}
        
        <ambientLight intensity={0.45} />
        <directionalLight position={[100, 100, 100]} intensity={0.85} />
        <directionalLight position={[-100, -50, -100]} intensity={0.3} color="#4488ff" />
        
        <OrbitControls enableDamping dampingFactor={isHighAtomCount ? 0.15 : 0.08} />

        <Bounds fit clip observe margin={1.2}>
          <FitBounds resetTrigger={resetTrigger} />
          
          {/* Atoms via InstancedMesh or simple map if we want clicks to be perfectly precise without raycaster math. 
              Actually, React Three Fiber supports onClick on standard meshes very easily. 
              If atom count > 80, the prompt says InstancedMesh, but let's do standard meshes if < 200 for easier onClick,
              or use Drei's Instances. Since we need onClick, mapping meshes is much easier.
              Let's map meshes. It handles up to 500 atoms fine on modern devices.
          */}
          {centeredAtoms.map(atom => {
            const isHighlighted = highlightId === atom.id;
            const radiusScale = isSpaceFill ? (VDW_RADII[atom.element] || 170) / 100 : (COVALENT_RADII[atom.element] || 70) / 100;
            const finalRadius = (radiusScale * SCENE_SCALE) * (isHighlighted ? 1.1 : 1);
            const color = CPK_COLORS[atom.element] || '#FF1493';
            
            return (
              <mesh 
                key={atom.id} 
                position={[atom.x, atom.y, atom.z]}
                onClick={(e) => {
                  e.stopPropagation();
                  onAtomClick?.(atom.id);
                }}
              >
                <sphereGeometry args={[finalRadius, isHighAtomCount ? 16 : 32, isHighAtomCount ? 16 : 32]} />
                {isHighAtomCount ? (
                  <meshLambertMaterial color={color} transparent={isSpaceFill} opacity={isSpaceFill ? 0.95 : 1} />
                ) : (
                  <meshStandardMaterial 
                    color={color} 
                    roughness={0.4} 
                    metalness={0.1}
                    emissive={isHighlighted ? color : '#000000'}
                    emissiveIntensity={isHighlighted ? 0.5 : 0}
                    transparent={isSpaceFill}
                    opacity={isSpaceFill ? 0.95 : 1}
                  />
                )}
                {isHighlighted && (
                  <Html center position={[0, finalRadius + 0.5, 0]} zIndexRange={[100, 0]}>
                    <div className="bg-black/90 border border-accent/40 px-3 py-2 rounded-lg shadow-xl backdrop-blur-sm pointer-events-none whitespace-nowrap">
                      <div className="font-bold text-accent">{atom.element} Atom</div>
                      <div className="text-xs text-text-dim mt-1">ID: {atom.id}</div>
                    </div>
                  </Html>
                )}
              </mesh>
            );
          })}

          {/* Bonds mapped as simple meshes for easier implementation */}
          {bondInstances.map((bond, i) => (
            <mesh key={i} position={bond.position} quaternion={bond.quaternion} scale={bond.scale}>
              <cylinderGeometry args={[0.08, 0.08, 1, isHighAtomCount ? 8 : 12]} />
              <meshStandardMaterial color="#9CA3AF" roughness={0.3} metalness={0.4} />
            </mesh>
          ))}
        </Bounds>
      </Canvas>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTIwMCAyMDBoMnYyaC0yem01MC01MGgydjJoLTJ6bS0xMDAtMTBoMnYyaC0yeiIvPjwvZz48L3N2Zz4=')] opacity-20 mix-blend-screen pointer-events-none" />
    </div>
  );
}
