import { useRef, useMemo } from 'react';
import { useAppStore, AtomViewMode } from '../../store/useAppStore';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import { CATEGORY_COLORS } from '../../data/constants';

function Nucleus({ atomicNumber, atomicMass, categoryColor }: { atomicNumber: number, atomicMass: number, categoryColor: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  const neutrons = Math.round(atomicMass) - atomicNumber;
  const totalNucleons = atomicNumber + neutrons;
  const maxRendered = 60; // Cap to keep it performant
  const renderCount = Math.min(totalNucleons, maxRendered);
  
  // Distribute points in a sphere
  const nucleons = useMemo(() => {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    // Spread radius of the nucleon cluster (0 for a single nucleon so it sits dead center)
    const clusterRadius = renderCount <= 1 ? 0 : 0.5 + Math.pow(renderCount, 0.33) * 0.15;
    for (let i = 0; i < renderCount; i++) {
      // Guard against divide-by-zero when renderCount === 1 (e.g. hydrogen: 1 proton, 0 neutrons)
      const y = renderCount === 1 ? 0 : 1 - (i / (renderCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const isProton = i % 2 === 0; // simple alternating distribution
      points.push({
        position: new THREE.Vector3(x, y, z).multiplyScalar(clusterRadius),
        color: isProton ? categoryColor : '#607D8B'
      });
    }
    return points;
  }, [renderCount, categoryColor]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <pointLight distance={10} intensity={2} color={categoryColor} decay={2} />
      {nucleons.map((n, i) => (
        <mesh key={i} position={n.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={0.2} roughness={0.4} />
        </mesh>
      ))}
      <Html position={[0, -Math.pow(renderCount, 0.33) * 0.15 - 0.5, 0]} center>
        <div className="bg-black/80 border border-white/10 px-2 py-1 rounded text-[10px] text-white/80 whitespace-nowrap backdrop-blur-sm pointer-events-none">
          P: {atomicNumber} <span className="mx-1">|</span> N: {neutrons}
        </div>
      </Html>
    </group>
  );
}

function BohrModel({ shells, categoryColor }: { shells: number[], categoryColor: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Scale so the outermost shell always fits the (small) viewport, regardless of shell count.
  const maxShells = shells.length;
  const maxRadius = 1.5 + (maxShells - 1) * 1.2;
  const scaleFactor = maxRadius / 2.3;

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the whole model slowly
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {shells.map((count, i) => {
        const radius = (1.5 + i * 1.2) / scaleFactor;
        const speed = 1 / (i + 1); // Inner shells orbit faster
        return (
          <BohrShell key={i} n={i + 1} count={count} radius={radius} speed={speed} color={categoryColor} />
        );
      })}
    </group>
  );
}

function BohrShell({ n, count, radius, speed, color }: { n: number, count: number, radius: number, speed: number, color: string }) {
  const ringRef = useRef<THREE.Group>(null);
  
  const electrons = useMemo(() => {
    const e = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      e.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        angle
      });
    }
    return e;
  }, [count, radius]);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      // Give each shell a slight tilt
      ringRef.current.rotation.x = Math.sin(n) * 0.5;
      ringRef.current.rotation.y = Math.cos(n) * 0.5;
    }
  });

  return (
    <group ref={ringRef}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
      {electrons.map((e, i) => (
        <mesh key={i} position={[e.x, e.y, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
          <pointLight distance={1} intensity={0.5} color="#ffffff" />
        </mesh>
      ))}
      {/* Shell label */}
      <Html position={[radius, 0, 0]} center zIndexRange={[100, 0]}>
        <div className="text-[8px] text-white/40 px-1 select-none pointer-events-none whitespace-nowrap" style={{ transform: 'translateY(-130%)' }}>
          n{n}
        </div>
      </Html>
    </group>
  );
}

function CloudModel({ shells }: { shells: number[] }) {
  const pointsRef = useRef<THREE.Points>(null);
  const maxRadius = 1.5 + (shells.length - 1) * 1.2;
  const scaleFactor = maxRadius / 2.3;

  const particles = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const colorObj = new THREE.Color();

    // Box-Muller gaussian for realistic radial probability spread around each shell.
    const gaussian = (mean: number, stdev: number) => {
      const u = 1 - Math.random();
      const v = Math.random();
      const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
      return mean + z * stdev;
    };

    shells.forEach((count, i) => {
      if (count <= 0) return;
      const radius = (1.5 + i * 1.2) / scaleFactor;
      // Dense enough that even 1-electron shells read as a cloud, scaled by occupancy.
      const numPoints = 1200 + count * 600;

      // Cool-to-warm gradient per shell so layers are distinguishable.
      colorObj.setHSL(0.6 - (i / Math.max(1, shells.length)) * 0.6, 0.85, 0.6);

      // Shell thickness ~ a fraction of its radius (inner shells tighter).
      const stdev = radius * 0.16 + 0.05;

      for (let j = 0; j < numPoints; j++) {
        // Uniform direction on the unit sphere.
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);

        // Radius drawn from a gaussian centred on the shell radius -> fuzzy probability shell.
        const r = Math.max(0.05, gaussian(radius, stdev));

        positions.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
        colors.push(colorObj.r, colorObj.g, colorObj.b);
      }
    });

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors)
    };
  }, [shells, scaleFactor]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.32 + Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.positions.length / 3} array={particles.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particles.colors.length / 3} array={particles.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.35} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <Html position={[0, -4, 0]} center>
        <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-dim whitespace-nowrap backdrop-blur-md pointer-events-none">
          Electron position is probabilistic (Heisenberg Uncertainty)
        </div>
      </Html>
    </group>
  );
}

function Dumbbell({ axis, color }: { axis: 'x' | 'y' | 'z'; color: string }) {
  const rot: [number, number, number] =
    axis === 'x' ? [0, 0, Math.PI / 2] : axis === 'z' ? [Math.PI / 2, 0, 0] : [0, 0, 0];
  return (
    <group rotation={rot}>
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshPhongMaterial color={color} transparent opacity={0.22} depthWrite={false} />
      </mesh>
      <mesh position={[0, -1.1, 0]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshPhongMaterial color={color} transparent opacity={0.22} depthWrite={false} />
      </mesh>
    </group>
  );
}

// A four-lobed (cloverleaf) d-type orbital lying in a plane, lobes between the axes.
function Cloverleaf({ rotation, color }: { rotation: [number, number, number]; color: string }) {
  const lobes: [number, number, number][] = [
    [0.95, 0.95, 0],
    [-0.95, 0.95, 0],
    [0.95, -0.95, 0],
    [-0.95, -0.95, 0],
  ];
  return (
    <group rotation={rotation}>
      {lobes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.5, 20, 20]} />
          <meshPhongMaterial color={color} transparent opacity={0.2} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function OrbitalsModel({ block, symbol }: { block: string; symbol: string }) {
  const showP = block === 'p' || block === 'd' || block === 'f';
  const showD = block === 'd' || block === 'f';
  const showF = block === 'f';

  const label =
    block === 's'
      ? `${symbol}: spherical s valence orbital`
      : block === 'p'
      ? `${symbol}: s + p valence orbitals (p-block)`
      : block === 'd'
      ? `${symbol}: s, p & four-lobed d orbitals (d-block)`
      : `${symbol}: s, p, d & complex f orbitals (f-block)`;

  return (
    <group>
      {/* s orbital — spherical, present for every element */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshPhongMaterial color="#ef4444" transparent opacity={0.16} depthWrite={false} />
      </mesh>

      {/* p orbitals — three orthogonal dumbbells */}
      {showP && (
        <>
          <Dumbbell axis="x" color="#3b82f6" />
          <Dumbbell axis="y" color="#22c55e" />
          <Dumbbell axis="z" color="#eab308" />
        </>
      )}

      {/* d orbitals — four-lobed cloverleaves in different planes */}
      {showD && (
        <>
          <Cloverleaf rotation={[0, 0, 0]} color="#a855f7" />
          <Cloverleaf rotation={[Math.PI / 2, 0, 0]} color="#ec4899" />
          <Cloverleaf rotation={[0, Math.PI / 2, Math.PI / 4]} color="#f97316" />
        </>
      )}

      {/* f orbitals — schematic extra lobes along the diagonals */}
      {showF && (
        <>
          <Cloverleaf rotation={[Math.PI / 4, Math.PI / 4, 0]} color="#14b8a6" />
          <Cloverleaf rotation={[-Math.PI / 4, Math.PI / 4, Math.PI / 2]} color="#06b6d4" />
        </>
      )}

      <Html position={[0, -4, 0]} center>
        <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-dim whitespace-nowrap backdrop-blur-md pointer-events-none">
          {label}
        </div>
      </Html>
    </group>
  );
}

export function AtomVisualizer() {
  const { selectedElement, atomView, setAtomView } = useAppStore();

  const options: { label: React.ReactNode; value: AtomViewMode }[] = [
    { label: '⚛ Bohr', value: 'bohr' },
    { label: '☁ Cloud', value: 'cloud' },
    { label: '🔮 Orbitals', value: 'orbital' },
  ];

  const categoryColor = selectedElement 
    ? (CATEGORY_COLORS[selectedElement.category] || '#ffffff')
    : '#ffffff';

  return (
    <div className="relative w-full h-full flex flex-col bg-bg/50 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(79, 195, 247, 0.05) 0%, transparent 70%)' }}>
      
      {/* View Switcher Overlay */}
      {selectedElement && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-64">
          <SegmentedControl
            options={options}
            value={atomView}
            onChange={setAtomView}
          />
        </div>
      )}

      {/* Canvas */}
      <div className="flex-1 w-full h-full">
        {selectedElement ? (
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
            <AdaptiveDpr />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <OrbitControls enableDamping dampingFactor={0.05} />
            
            <Nucleus 
              atomicNumber={selectedElement.atomicNumber} 
              atomicMass={selectedElement.atomicMass || (selectedElement.atomicNumber * 2)} 
              categoryColor={categoryColor} 
            />

            {atomView === 'bohr' && (
              <BohrModel shells={selectedElement.electronsPerShell} categoryColor={categoryColor} />
            )}
            
            {atomView === 'cloud' && (
              <CloudModel shells={selectedElement.electronsPerShell} />
            )}

            {atomView === 'orbital' && (
              <OrbitalsModel block={selectedElement.block} symbol={selectedElement.symbol} />
            )}
            
          </Canvas>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-10 animate-pulse">⚛</div>
              <h2 className="text-xl text-text-dim font-medium">Select an element</h2>
              <p className="text-sm text-text-dim/60">Choose from the periodic table to visualize</p>
            </div>
            {/* CSS Starfield Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTIwMCAyMDBoMnYyaC0yem01MC01MGgydjJoLTJ6bS0xMDAtMTBoMnYyaC0yeiIvPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-screen pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}
