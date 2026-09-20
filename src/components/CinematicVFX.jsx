import React, { useEffect, useRef } from 'react';

export default function CinematicVFX({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 15), 90);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        z: Math.random() * 2 + 0.5
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const grad = ctx.createRadialGradient(
        mouseX, mouseY, 50,
        width / 2, height / 2, Math.max(width, height)
      );

      if (isDark) {
        grad.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
        grad.addColorStop(0.5, 'rgba(2, 6, 23, 0.95)');
        grad.addColorStop(1, 'rgba(2, 6, 23, 1)');
      } else {
        grad.addColorStop(0, 'rgba(241, 245, 249, 0.8)');
        grad.addColorStop(0.5, 'rgba(248, 250, 252, 0.95)');
        grad.addColorStop(1, 'rgba(241, 245, 249, 1)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.03)' : 'rgba(14, 165, 233, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & render particles & connections
      ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.7)' : 'rgba(2, 132, 199, 0.7)';
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.12)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-colors duration-500"
    />
  );
}