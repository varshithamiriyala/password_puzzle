"use client";

import React, { useEffect, useState } from 'react';

export const Confetti = () => {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -20 - Math.random() * 100,
      animDuration: 3 + Math.random() * 4,
      animDelay: Math.random() * 5,
      rotation: Math.random() * 360,
      size: 8 + Math.random() * 8,
      color: ['#673AB7', '#009688', '#FFC107', '#F44336', '#2196F3'][Math.floor(Math.random() * 5)],
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1000,
      }}
    >
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            animation: `fall ${p.animDuration}s linear ${p.animDelay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(120vh) rotate(${Math.random() * 360}deg);
          }
        }
      `}</style>
    </div>
  );
};
