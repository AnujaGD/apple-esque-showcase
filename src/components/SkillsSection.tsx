
import React from "react";
import { Code, Database, Globe, Layout, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ElementType;
  items: string[];
}

const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Vue", "HTML5/CSS3", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: Terminal,
    items: ["Node.js", "Express", "Python", "Django", "PHP"]
  },
  {
    name: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
  },
  {
    name: "Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#"]
  },
  {
    name: "Web Technologies",
    icon: Globe,
    items: ["REST APIs", "GraphQL", "WebSockets", "OAuth", "PWAs"]
  },
  {
    name: "Other",
    icon: Layers,
    items: ["Git", "Docker", "AWS", "CI/CD", "Testing"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My expertise spans across various technologies and tools in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="apple-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <skill.icon size={24} className="text-gray-800" />
                </div>
                <h3 className="font-semibold text-xl">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
