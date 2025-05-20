import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-5",
        scrolled
          ? "bg-futuristic-darker/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-bold text-2xl"
        >
          <img 
            src="/assets/logo.png" 
            alt="Ralph Rizk Logo" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-futuristic-text-secondary hover:text-futuristic-blue transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation using Sheet component */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="text-futuristic-text-primary focus:outline-none menu-button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-futuristic-darker/95 backdrop-blur-xl border-l border-white/10 p-0 w-[85%] sm:max-w-sm"
            >
              <div className="flex flex-col justify-center h-full p-6">
                <div className="flex flex-col items-center space-y-8 py-10">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-futuristic-text-primary hover:text-futuristic-blue transition-colors duration-300 text-2xl font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
