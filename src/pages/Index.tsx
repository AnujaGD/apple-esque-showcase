
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Adding some smooth scrolling behavior
  useEffect(() => {
    // Handler for scroll animations
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      if (section.id !== 'hero') {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <ProjectsSection />
        </div>
        <div className="snap-start">
          <SkillsSection />
        </div>
        <div className="snap-start">
          <ContactSection />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
