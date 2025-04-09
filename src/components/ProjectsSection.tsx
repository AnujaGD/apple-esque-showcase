
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
    title: "Code Blossom Quest",
    description: "Practice coding like a game — earn XP, build streaks, and conquer algorithms daily.",
    image: "https://unsplash.com/photos/shallow-focus-photography-of-computer-codes-BfrQnKBulYQ",
    demoUrl: "https://code-blossom-quest.vercel.app/",
    githubUrl: "https://github.com/AnujaGD/code-blossom-quest",
    technologies: ["React", "Node.js", "Vite", "Supabase"]
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
      <div className="py-10">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4 text-gradient-pink">Featured Projects</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
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
