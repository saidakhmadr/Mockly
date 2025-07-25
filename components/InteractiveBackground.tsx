import React, { useRef, useEffect, useState } from 'react';

// Utility to interpolate between two colors
function lerpColor(a: string, b: string, t: number) {
  const ah = parseInt(a.replace('#', ''), 16),
    ar = ah >> 16, ag = (ah >> 8) & 0xff, ab = ah & 0xff,
    bh = parseInt(b.replace('#', ''), 16),
    br = bh >> 16, bg = (bh >> 8) & 0xff, bb = bh & 0xff,
    rr = ar + t * (br - ar),
    rg = ag + t * (bg - ag),
    rb = ab + t * (bb - ab);
  return `rgb(${rr|0},${rg|0},${rb|0})`;
}

const GRADIENTS = [
  ['#a1c4fd', '#c2e9fb'], // blue
  ['#fbc2eb', '#a6c1ee'], // pink/purple
  ['#f9d423', '#ff4e50'], // yellow/orange
  ['#43cea2', '#185a9d'], // green/blue
];

export default function InteractiveBackground({ children }: { children?: React.ReactNode }) {
  const [gradientIdx, setGradientIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isDown, setIsDown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x, y });
    };
    const handleDown = () => {
      setIsDown(true);
      setGradientIdx(idx => (idx + 1) % GRADIENTS.length);
    };
    const handleUp = () => setIsDown(false);
    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mousedown', handleDown);
      el.addEventListener('mouseup', handleUp);
      el.addEventListener('mouseleave', handleUp);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mousedown', handleDown);
        el.removeEventListener('mouseup', handleUp);
        el.removeEventListener('mouseleave', handleUp);
      }
    };
  }, []);

  // Animate gradient
  const grad = GRADIENTS[gradientIdx];
  const gradNext = GRADIENTS[(gradientIdx + 1) % GRADIENTS.length];
  const t = isDown ? 0.5 : 0;
  const color1 = lerpColor(grad[0], gradNext[0], t);
  const color2 = lerpColor(grad[1], gradNext[1], t);
  const angle = 90 + (mouse.x - 0.5) * 60 + (mouse.y - 0.5) * 60;

  // Parallax layers
  const parallax1 = {
    transform: `translate3d(${(mouse.x - 0.5) * 30}px, ${(mouse.y - 0.5) * 30}px, 0)`
  };
  const parallax2 = {
    transform: `translate3d(${(mouse.x - 0.5) * 60}px, ${(mouse.y - 0.5) * 60}px, 0)`
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
        transition: isDown ? 'background 0.5s' : 'background 0.2s',
      }}
    >
      {/* Parallax layers */}
      <div
        style={{
          ...parallax2,
          position: 'absolute',
          left: '10%',
          top: '20%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          ...parallax1,
          position: 'absolute',
          right: '15%',
          bottom: '15%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.07)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
} 