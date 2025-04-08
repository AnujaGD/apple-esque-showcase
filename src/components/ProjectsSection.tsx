
import React from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience and responsive design. Built with a focus on user experience and performance optimization.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: "project2",
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking personal finances with data visualization. Features real-time updates, custom reports, and budgeting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/dashboard",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
    technologies: ["TypeScript", "React", "Chart.js", "Firebase"]
  },
  {
    id: "project3",
    title: "Social Media App",
    description: "Real-time social media application with messaging and content sharing. Includes video calls, story features, and algorithmic content recommendations.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/social",
    githubUrl: "https://github.com/yourusername/social-app",
    technologies: ["React Native", "Firebase", "Redux", "WebRTC"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="snap-mandatory snap-y">
      <div className="py-16">
        <div className="text-center mb-8">
          <h2 className="heading-lg mb-4 text-gradient-pink">Featured Projects</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A showcase of my recent development work, spanning web and mobile applications.
          </p>
        </div>

        <div className="project-container">
          {projects.map((project) => (
            <div key={project.id} className="project-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
