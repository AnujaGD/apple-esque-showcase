
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
    description: "A modern e-commerce solution with seamless checkout experience and responsive design.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: "project2",
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking personal finances with data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/dashboard",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
    technologies: ["TypeScript", "React", "Chart.js", "Firebase"]
  },
  {
    id: "project3",
    title: "Social Media App",
    description: "Real-time social media application with messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&w=800&q=80",
    demoUrl: "https://demo.example.com/social",
    githubUrl: "https://github.com/yourusername/social-app",
    technologies: ["React Native", "Firebase", "Redux", "WebRTC"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent development work, spanning web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
