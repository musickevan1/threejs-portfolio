import { useEffect, useRef } from 'react';

interface GradientBackgroundProps {
  colors: string[];
  children: React.ReactNode;
}

const GradientBackground = ({ colors, children }: GradientBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let gradient: CanvasGradient;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      t += 0.005;
      
      // Create gradient
      gradient = ctx.createLinearGradient(
        Math.cos(t) * canvas.width,
        Math.sin(t) * canvas.height,
        canvas.width - Math.cos(t + Math.PI) * canvas.width,
        canvas.height - Math.sin(t + Math.PI) * canvas.height
      );

      colors.forEach((color, i) => {
        gradient.addColorStop(i / (colors.length - 1), color);
      });

      // Apply gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [colors]);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-20"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default GradientBackground;