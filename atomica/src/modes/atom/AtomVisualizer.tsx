import React, { useRef, useMemo } from 'react';
import { useAppStore, AtomViewMode } from '../../../store/useAppStore';
import { SegmentedControl } from '../../ui/SegmentedControl';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import { CATEGORY_COLORS } from '../../../data/constants';

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
    for (let i = 0; i < renderCount; i++) {
      const y = 1 - (i / (renderCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      const isProton = i % 2 === 0; // simple alternating distribution
      points.push({
        position: new THREE.Vector3(x, y, z).multiplyScalar(0.5 + Math.pow(renderCount, 0.33) * 0.15),
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
  
  // Scale down heavily so 7 shells fit nicely
  const maxShells = shells.length;
  const scaleFactor = Math.max(1, maxShells / 3);

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
        <div className="text-[9px] text-white/50 px-1 select-none pointer-events-none" style={{ transform: 'translateY(-100%)' }}>
          n={n} ({count}e⁻)
        </div>
      </Html>
    </group>
  );
}

function CloudModel({ shells }: { shells: number[] }) {
  const pointsRef = useRef<THREE.Points>(null);
  const scaleFactor = Math.max(1, shells.length / 3);

  const particles = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const colorObj = new THREE.Color();
    
    shells.forEach((count, i) => {
      const radius = (1.5 + i * 1.2) / scaleFactor;
      const numPoints = count * 200; // More points for a denser cloud
      
      // Color gradient per shell
      colorObj.setHSL((i * 0.15) % 1, 0.8, 0.6);
      
      for (let j = 0; j < numPoints; j++) {
        // Random point on sphere surface + gaussian noise for fuzziness
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        // Spread variance based on radius
        const rSpread = radius + (Math.random() - 0.5) * 0.8;
        
        const x = rSpread * Math.sin(phi) * Math.cos(theta);
        const y = rSpread * Math.sin(phi) * Math.sin(theta);
        const z = rSpread * Math.cos(phi);
        
        positions.push(x, y, z);
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
      mat.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.positions.length / 3} array={particles.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particles.colors.length / 3} array={particles.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} vertexColors transparent opacity={0.5} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <Html position={[0, -4, 0]} center>
        <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-dim whitespace-nowrap backdrop-blur-md pointer-events-none">
          Electron position is probabilistic (Heisenberg Uncertainty)
        </div>
      </Html>
    </group>
  );
}

function OrbitalsModel() {
  return (
    <group>
      {/* S Orbital (Sphere) */}
      <mesh transparent opacity={0.2}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial color="#ef4444" transparent opacity={0.15} depthWrite={false} />
      </mesh>
      
      {/* P Orbitals (Dumbbells) */}
      <mesh position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#3b82f6" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <mesh position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#3b82f6" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      
      <mesh position={[0, 1.8, 0]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#22c55e" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <mesh position={[0, -1.8, 0]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#22c55e" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      
      <mesh position={[0, 0, 1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#eab308" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <mesh position={[0, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.5, 2, 16, 16]} />
        <meshPhongMaterial color="#eab308" transparent opacity={0.2} depthWrite={false} />
      </mesh>

      <Html position={[0, -4, 0]} center>
        <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-dim whitespace-nowrap backdrop-blur-md pointer-events-none">
          Schematic visualization of s and p valence orbitals
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
              <OrbitalsModel />
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
