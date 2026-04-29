import React, { useEffect, useRef } from 'react';

export default function HeroParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const colors = [
            [232, 135, 42],  // saffron
            [201, 168, 76],  // gold
            [255, 255, 255], // white
        ];

        const particles = Array.from({ length: 60 }, () => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 0.5,
                speed: Math.random() * 0.4 + 0.15,
                opacity: Math.random() * 0.35 + 0.1,
                drift: (Math.random() - 0.5) * 0.3,
                color,
            };
        });

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.opacity})`;
                ctx.fill();
                p.y -= p.speed;
                p.x += p.drift;
                
                // Wrap around
                if (p.y < -10) { 
                    p.y = canvas.height + 10; 
                    p.x = Math.random() * canvas.width; 
                }
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
            });
            animId = requestAnimationFrame(draw);
        }
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
    );
}
