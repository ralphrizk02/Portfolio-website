
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  revealDelay?: number;
  duration?: number;
  as?: React.ElementType;
  once?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  revealDelay = 100,
  duration = 800,
  as: Component = 'div',
  once = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const animatedOnce = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create wrapped spans for each character
    const chars = text.split('');
    container.innerHTML = '';
    
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Replace space with non-breaking space
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = 'inline-block';
      span.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
      span.style.transitionDelay = `${i * revealDelay}ms`;
      container.appendChild(span);
    });

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (once && animatedOnce.current) return;
          
          const spans = container.querySelectorAll('span');
          spans.forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          });
          
          animatedOnce.current = true;
          
          if (once && observer.current) {
            observer.current.disconnect();
          }
        } else if (!once) {
          const spans = container.querySelectorAll('span');
          spans.forEach(span => {
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
          });
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    observer.current.observe(container);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [text, duration, revealDelay, once]);

  return (
    <Component className={cn("inline", className)}>
      <div ref={containerRef} className="inline whitespace-pre-wrap"></div>
    </Component>
  );
};

export default TextReveal;
