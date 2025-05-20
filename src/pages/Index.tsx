import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Page entrance animation
    document.body.classList.add("animate-page-transition-in");
    
    // Initialize intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add slide-in animations alternating between left and right
          const sectionIndex = Array.from(document.querySelectorAll('section[data-animate]'))
            .findIndex(section => section === entry.target);
          
          if (sectionIndex % 2 === 0) {
            entry.target.classList.add("animate-reveal-right");
          } else {
            entry.target.classList.add("animate-reveal-left");
          }
          
          entry.target.classList.add("animate-fade-in");
          
          // Set active section for hover effects
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
          
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections with the data-animate attribute
    document.querySelectorAll("section[data-animate]").forEach((element) => {
      // Only apply animation on screens >= 768px (md: breakpoint)
      if (window.innerWidth >= 768) {
        if (element.classList.contains("animate-fade-in")) {
          element.classList.remove("animate-fade-in");
        }
        const sectionIndex = Array.from(document.querySelectorAll('section[data-animate]'))
          .findIndex(section => section === element);
        if (sectionIndex % 2 === 0) {
          (element as HTMLElement).style.transform = "translateX(-50px)";
        } else {
          (element as HTMLElement).style.transform = "translateX(50px)";
        }
        (element as HTMLElement).style.opacity = "0";
        (element as HTMLElement).style.transition = "transform 1s ease-out, opacity 1s ease-out";
      } else {
        // On mobile, show immediately
        (element as HTMLElement).style.transform = "none";
        (element as HTMLElement).style.opacity = "1";
      }
      appearOnScroll.observe(element);
    });
    
    // Also observe elements with the data-animate attribute (not sections)
    document.querySelectorAll("[data-animate]:not(section)").forEach((element) => {
      appearOnScroll.observe(element);
    });
    
    return () => {
      document.body.classList.remove("animate-page-transition-in");
    };
  }, []);

  return (
    <div className="min-h-screen bg-futuristic-dark overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About data-animate />
        <Skills data-animate />
        <Projects data-animate />
        <Contact data-animate />
      </main>
      
      <footer className="py-8 border-t border-white/5 bg-futuristic-darker/80">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-futuristic-text-secondary text-sm">
              © {new Date().getFullYear()} Ralph Rizk. All rights reserved.
            </p>
            <p className="text-futuristic-text-secondary text-sm mt-2 md:mt-0">
              Designed with precision & built with passion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
