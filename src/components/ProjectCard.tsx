
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
    <div className={cn("h-screen flex flex-col justify-center items-center px-6 py-20", className)}>
      <div className="max-w-6xl w-full mx-auto glass-effect rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-4">{project.title}</h3>
          <p className="text-foreground/80 mb-8 text-lg">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
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
              className="apple-button flex items-center gap-2"
            >
              Live Demo <ArrowUpRight size={18} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="apple-button-secondary flex items-center gap-2"
            >
              View Code <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
