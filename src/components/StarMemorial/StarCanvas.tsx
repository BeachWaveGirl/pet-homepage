
import { useRef, useEffect } from "react";

interface StarCanvasProps {
  className?: string;
}

const StarCanvas = ({ className }: StarCanvasProps) => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Function to animate stars on the canvas
  const animateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match its display size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Create stars
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      brightness: Math.random(),
      speed: Math.random() * 0.05
    }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Make stars twinkle
        star.brightness += star.speed;
        if (star.brightness > 1 || star.brightness < 0.2) {
          star.speed = -star.speed;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  };
  
  // Initialize star animation when component mounts
  useEffect(() => {
    animateStars();
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full bg-black ${className || ''}`} />;
};

export default StarCanvas;
