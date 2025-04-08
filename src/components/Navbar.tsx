
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
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-section flex items-center justify-between">
        <a href="#" className="text-xl font-semibold">Portfolio</a>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-600 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
