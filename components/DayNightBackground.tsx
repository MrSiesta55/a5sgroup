'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, Stars } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

type TimeOfDay = 'day' | 'night';

function AnimatedStars({ scrollProgress }: { scrollProgress: number }) {
  const starsRef = useRef<any>(null);

  useFrame((state) => {
    if (starsRef.current) {
      // Continuous rotation + scroll-based movement
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.05 + scrollProgress * Math.PI * 2;
      starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1 + scrollProgress * 0.5;
    }
  });

  return (
    <Stars 
      ref={starsRef}
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1}
    />
  );
}

function ShootingStars({ scrollProgress }: { scrollProgress: number }) {
  const star1Ref = useRef<THREE.Mesh>(null);
  const star2Ref = useRef<THREE.Mesh>(null);
  const star3Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    // Only show shooting stars in second section (scroll 0.3 - 0.7)
    const inRange = scrollProgress > 0.3 && scrollProgress < 0.7;
    
    if (inRange) {
      if (star1Ref.current) {
        const time = (state.clock.elapsedTime % 3);
        star1Ref.current.position.x = 30 - time * 20;
        star1Ref.current.position.y = 10 - time * 8;
        star1Ref.current.position.z = -20;
        star1Ref.current.visible = true;
      }
      if (star2Ref.current) {
        const time = ((state.clock.elapsedTime + 1.5) % 3);
        star2Ref.current.position.x = -30 + time * 20;
        star2Ref.current.position.y = -10 + time * 8;
        star2Ref.current.position.z = -25;
        star2Ref.current.visible = true;
      }
      if (star3Ref.current) {
        const time = ((state.clock.elapsedTime + 0.7) % 3);
        star3Ref.current.position.x = 10 - time * 20;
        star3Ref.current.position.y = 15 - time * 10;
        star3Ref.current.position.z = -22;
        star3Ref.current.visible = true;
      }
    } else {
      if (star1Ref.current) star1Ref.current.visible = false;
      if (star2Ref.current) star2Ref.current.visible = false;
      if (star3Ref.current) star3Ref.current.visible = false;
    }
  });

  return (
    <>
      <mesh ref={star1Ref}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh ref={star2Ref}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      <mesh ref={star3Ref}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshBasicMaterial color="#93c5fd" />
      </mesh>
    </>
  );
}

function Nebula({ scrollProgress }: { scrollProgress: number }) {
  const nebula1Ref = useRef<THREE.Mesh>(null);
  const nebula2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    // Show nebula in third section (scroll > 0.6)
    const isVisible = scrollProgress > 0.6;
    const opacity = Math.min(0.3, (scrollProgress - 0.6) * 0.75);
    
    if (nebula1Ref.current) {
      nebula1Ref.current.visible = isVisible;
      nebula1Ref.current.rotation.z = state.clock.elapsedTime * 0.03;
      (nebula1Ref.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
    
    if (nebula2Ref.current) {
      nebula2Ref.current.visible = isVisible;
      nebula2Ref.current.rotation.z = -state.clock.elapsedTime * 0.02;
      (nebula2Ref.current.material as THREE.MeshBasicMaterial).opacity = opacity * 0.7;
    }
  });

  return (
    <>
      <mesh ref={nebula1Ref} position={[10, 5, -40]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={nebula2Ref} position={[-15, -8, -45]}>
        <planeGeometry args={[35, 35]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

function RealisticMoon() {
  const moonRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (moonRef.current) {
      // Very slow rotation
      moonRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group position={[15, 8, -30]}>
      {/* Main moon sphere */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial 
          color="#bcc0c4"
          roughness={1}
          metalness={0}
          emissive="#6b7280"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Craters - dark spots */}
      <mesh position={[1.5, 0.5, 3.5]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial 
          color="#4a5568"
          roughness={1}
        />
      </mesh>
      
      <mesh position={[-1.2, -1, 3.7]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial 
          color="#3a4453"
          roughness={1}
        />
      </mesh>
      
      <mesh position={[0.5, 1.8, 3.8]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#505967"
          roughness={1}
        />
      </mesh>
      
      {/* Soft glow around moon */}
      <mesh>
        <sphereGeometry args={[4.3, 32, 32]} />
        <meshBasicMaterial 
          color="#e5e7eb"
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Moon light */}
      <pointLight position={[0, 0, 5]} intensity={2} color="#f3f4f6" distance={100} decay={1.5} />
    </group>
  );
}

function DayNightScene({ timeOfDay, scrollProgress }: { timeOfDay: TimeOfDay; scrollProgress: number }) {
  const isDay = timeOfDay === 'day';

  return (
    <>
      {isDay ? (
        <>
          {/* Daytime Sky with Sun */}
          <Sky
            distance={450000}
            sunPosition={[100, 20, 100]}
            inclination={0.6}
            azimuth={0.25}
            turbidity={8}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[100, 20, 100]} intensity={1} color="#ffffff" />
        </>
      ) : (
        <>
          {/* Nighttime Sky */}
          <color attach="background" args={['#000814']} />
          
          {/* Animated Stars - always visible */}
          <AnimatedStars scrollProgress={scrollProgress} />
          
          {/* Shooting stars - section 2 */}
          <ShootingStars scrollProgress={scrollProgress} />
          
          {/* Nebula clouds - section 3 */}
          <Nebula scrollProgress={scrollProgress} />
          
          <ambientLight intensity={0.08} color="#1e293b" />
        </>
      )}
    </>
  );
}

export function DayNightBackground() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('night');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkTime = () => {
      // Get Stockholm time
      const stockholmTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Stockholm',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      // Extract hour
      const hour = parseInt(stockholmTime.split(':')[0]);
      
      // TEMPORARY: Force nighttime to preview
      setTimeOfDay('night');
      
      // Original logic (uncomment to use real time):
      // if (hour >= 6 && hour < 18) {
      //   setTimeOfDay('day');
      // } else {
      //   setTimeOfDay('night');
      // }
    };

    // Handle scroll for animations
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
    };

    // Check immediately
    checkTime();
    handleScroll();
    
    // Check every minute
    const interval = setInterval(checkTime, 60000);
    
    // Listen to scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <DayNightScene timeOfDay={timeOfDay} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
