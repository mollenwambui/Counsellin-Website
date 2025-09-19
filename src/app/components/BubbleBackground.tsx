"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BubbleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create style element for float animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);

    const colors = [
      'rgba(29, 180, 240, 0.2)', // sky-blue
      'rgba(14, 143, 160, 0.2)', // light-sky
      'rgba(79, 195, 247, 0.2)', // dark-sky
      'rgba(142, 92, 246, 0.2)', // vibrant-purple
      'rgba(249, 115, 22, 0.2)', // vibrant-coral
    ];

    const bubbles = Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 80 + 30;
      const bubble = document.createElement("div");
      
      // Apply inline styles
      bubble.style.position = 'absolute';
      bubble.style.borderRadius = '50%';
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.animation = `float ${Math.random() * 15 + 10}s linear infinite`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(bubble);
      return bubble;
    });

    return () => {
      bubbles.forEach(bubble => bubble.remove());
      style.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        inset: '0',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default BubbleBackground;