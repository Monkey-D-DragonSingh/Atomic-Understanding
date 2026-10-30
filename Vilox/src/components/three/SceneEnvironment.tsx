import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const SCENE_BG = '#04060c';

/**
 * Shared ambient scene dressing for every R3F canvas in the app:
 * deep-space background color, volumetric fog, and a drifting particle field.
 * Gives all 3D views a cohesive "lab" atmosphere instead of flat empty space.
 */
export function SceneEnvironment({ sparkles = true }: { sparkles?: boolean }) {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color(SCENE_BG);
    scene.fog = new THREE.Fog(SCENE_BG, 15, 110);
    return () => {
      scene.background = null;
      scene.fog = null;
    };
  }, [scene]);

  return (
    <>
      {sparkles && (
        <Sparkles count={160} scale={[26, 20, 26]} size={3} speed={0.45} opacity={0.5} color="#93c5fd" />
      )}
    </>
  );
}
