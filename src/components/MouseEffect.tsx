import { useEffect, useRef } from 'react';

const MouseEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const requestRef = useRef<number>();
  const prevTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      // Throttle to 60 FPS
      if (timestamp - prevTimeRef.current < 16.67) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      prevTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point only every other frame
      if (timestamp % 32 < 16) {
        pointsRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          alpha: 0.5
        });
      }

      // Limit number of points
      if (pointsRef.current.length > 15) {
        pointsRef.current = pointsRef.current.slice(-15);
      }

      // Update and draw points
      ctx.shadowBlur = 0; // Disable shadow for better performance
      pointsRef.current.forEach((point, i) => {
        point.alpha *= 0.92;

        const size = Math.max(1, (i / pointsRef.current.length) * 8);
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 168, 255, ${point.alpha * 0.5})`;
        ctx.fill();
      });

      // Remove old points
      pointsRef.current = pointsRef.current.filter(point => point.alpha > 0.01);

      requestRef.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        width: '100vw',
        height: '100vh',
        zIndex: 100
      }}
    />
  );
};

export default MouseEffect; 