
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-md py-4 border-b border-white/5" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-section flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-foreground">Portfolio</a>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">Skills</a></li>
            <li><a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
