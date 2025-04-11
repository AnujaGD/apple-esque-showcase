
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "./ProjectsSection";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col justify-center items-center px-6 py-20 project-slide", className)}>
      <div className="max-w-7xl w-full mx-auto glass-effect rounded-3xl overflow-hidden flex flex-col lg:flex-row transform transition-all duration-500 hover:scale-[1.02] project-bubble">
        <div className="lg:w-1/2 aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <h3 className="text-4xl sm:text-5xl font-semibold mb-6 text-gradient-pink">{project.title}</h3>
          <p className="text-white/90 mb-10 text-xl">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-purple-900/40 text-light-purple text-base font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="apple-button flex items-center gap-2 bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-base px-8 py-4"
            >
              Live Demo <ArrowUpRight size={20} />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
