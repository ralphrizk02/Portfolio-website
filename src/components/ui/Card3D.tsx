
import React, { useRef, useState, ReactNode, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  interactiveBackground?: boolean;
}

const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  glowOnHover = true,
  intensity = 15,
  glowColor = 'rgba(0, 168, 255, 0.5)',
  onClick,
  disabled = false,
  interactiveBackground = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<{ x: number, y: number, size: number, speed: number, opacity: number }[]>([]);
  const animationRef = useRef<number>();
  
  // Initialize particles for the interactive background
  useEffect(() => {
    if (interactiveBackground) {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      }));
      setParticles(newParticles);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [interactiveBackground]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || disabled) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Dividing by larger numbers reduces the intensity of the effect
    const rotateY = mouseX / (rect.width / 2) * (intensity / 2);
    const rotateX = -mouseY / (rect.height / 2) * (intensity / 2);
    
    // Calculate position for the glow effect
    const posX = (mouseX / rect.width) * 100;
    const posY = (mouseY / rect.height) * 100;
    
    setRotation({ x: rotateX, y: rotateY });
    setPosition({ x: posX, y: posY });
    
    // Update particle positions when interactive background is enabled
    if (interactiveBackground && isHovering) {
      updateParticles(posX, posY);
    }
  };

  const updateParticles = (posX: number, posY: number) => {
    setParticles(prevParticles => 
      prevParticles.map(particle => ({
        ...particle,
        x: particle.x + (posX - 50) * 0.01 * particle.speed,
        y: particle.y + (posY - 50) * 0.01 * particle.speed
      }))
    );
    
    if (isHovering) {
      animationRef.current = requestAnimationFrame(() => updateParticles(posX, posY));
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset the rotation when the mouse leaves
    setRotation({ x: 0, y: 0 });
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-200 transform-gpu",
        { "cursor-pointer": onClick && !disabled },
        { "cursor-default": disabled },
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.2s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {glowOnHover && isHovering && !disabled && (
        <div
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${glowColor}, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}
      
      {interactiveBackground && isHovering && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: glowColor,
                opacity: particle.opacity,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
              }}
            />
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default Card3D;
