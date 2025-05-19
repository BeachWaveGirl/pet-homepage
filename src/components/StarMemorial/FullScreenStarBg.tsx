
import { useRef, useEffect } from "react";

const FullScreenStarBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Handle resize events
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      brightness: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill background with very dark blue (almost black)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Make stars twinkle by varying brightness
        star.brightness += star.twinkleSpeed * star.direction;
        
        // Reverse direction when reaching brightness limits
        if (star.brightness > 0.95 || star.brightness < 0.3) {
          star.direction *= -1;
        }
        
        // Draw the star with current brightness
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Occasional shooting star
        if (Math.random() < 0.0001) {
          const shootingStar = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height / 2, // Start in top half
            length: Math.random() * 80 + 20,
            angle: Math.PI / 4 + Math.random() * Math.PI / 4, // Diagonal angle
            speed: Math.random() * 10 + 15
          };
          
          const trail = 20;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length,
            shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length
          );
          ctx.stroke();
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default FullScreenStarBg;
