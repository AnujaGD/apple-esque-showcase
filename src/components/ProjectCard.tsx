
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
    <div className={cn("apple-card group", className)}>
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Code <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
