import React, { useEffect, useRef } from "react";
import TextReveal from "./ui/TextReveal";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!avatarRef.current) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the mouse position as a percentage of the screen
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply transformation to the avatar
      if (avatarRef.current) {
        avatarRef.current.style.transform = `
          perspective(1000px) 
          rotateY(${x * 5}deg) 
          rotateX(${-y * 5}deg) 
          translateZ(10px)
        `;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-futuristic-darker grid-background opacity-30 z-[-1]"></div>
      
      <div className="container px-6 mx-auto text-center z-10">
        <div 
          ref={avatarRef}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8 transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-futuristic-blue to-futuristic-purple-light p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/assets/profile.jpg" 
                alt="Ralph Rizk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-reveal-text" style={{ animationDelay: '300ms' }}>
          <TextReveal 
            text="Ralph Rizk" 
            className="inline-block" 
            revealDelay={50}
          />
        </h1>
        
        <h2 className="text-xl md:text-2xl text-futuristic-text-secondary mb-8 opacity-0 animate-reveal-text" style={{ animationDelay: '800ms' }}>
          <TextReveal 
            text="Creative WordPress Developer | AI Enthusiast | Security Geek" 
            className="inline-block" 
            revealDelay={30}
            duration={600}
          />
        </h2>
        
        <div className="flex justify-center space-x-6 mt-8 opacity-0 animate-reveal-text" style={{ animationDelay: '1200ms' }}>
          <a
            href="#about"
            className="px-6 py-3 rounded-lg bg-futuristic-blue/20 border border-futuristic-blue/50 text-futuristic-blue-light hover:bg-futuristic-blue/30 transition-all duration-300 backdrop-blur-sm"
          >
            Discover More
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-futuristic-blue text-white hover:bg-futuristic-blue-light transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="text-futuristic-text-secondary hover:text-futuristic-blue transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
