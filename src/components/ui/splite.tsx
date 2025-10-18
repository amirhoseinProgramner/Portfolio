import { useEffect, useRef } from 'react';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime');
        const canvas = canvasRef.current;
        if (canvas) {
          const app = new Application(canvas);
          await app.load(scene);
        }
      } catch (error) {
        console.error('Error loading Spline scene:', error);
      }
    };

    loadSpline();
  }, [scene]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
