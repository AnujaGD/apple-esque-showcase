
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-background/95">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="heading-xl animate-fade-in text-gradient">
          Building digital experiences with precision.
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto animate-fade-in-delay-1">
          Full-stack developer focused on creating elegant, performant, and user-centric applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-delay-2">
          <button onClick={scrollToProjects} className="apple-button flex items-center gap-2">
            View Projects <ArrowDown size={16} />
          </button>
          <a href="#contact" className="apple-button-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
