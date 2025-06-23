'use client';
import Particles from 'react-tsparticles';
import particlesConfig from '../../public/particlesjs-config.json'; // or load from public if needed
import { useEffect, useState } from 'react';

export default function BgAnimation() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/particlesjs-config.json') // 👈 must be in /public
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  if (!config) return null;

  return (
    <Particles
      id="tsparticles"
      options={config}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}