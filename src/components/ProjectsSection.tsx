
import React from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "project1",
    title: "Code Blossom Quest",
    description: "Practice coding like a game — earn XP, build streaks, and conquer algorithms daily.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://code-blossom-quest.vercel.app/",
    githubUrl: "https://github.com/AnujaGD/code-blossom-quest",
    technologies: ["React", "Node.js", "Vite", "Supabase"]
  },
  {
    id: "project2",
    title: "Splitzy",
    description: "Because doing the math should never ruin the meal — real-time bill splitting, simplified.",
    image: "https://plus.unsplash.com/premium_photo-1677265809141-2dae60173b27?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://split-j88giwikw-anujagds-projects.vercel.app/",
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
