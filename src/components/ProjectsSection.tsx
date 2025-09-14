import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Server, MessageSquare } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Client Support Portal",
    description: "Help desk system for managing technical support requests and solutions.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: MessageSquare,
    hint: "🎂 Special"
  },
  {
    id: 2,
    title: "Hardware Inventory",
    description: "System for tracking computer hardware and maintenance schedules.",
    tech: ["React", "Node.js"],
    icon: Database,
    hint: "🎉 Surprise"
  },
  {
    id: 3,
    title: "Tech Blog",
    description: "Personal blog sharing troubleshooting tips and tech solutions.",
    tech: ["WordPress", "PHP"],
    icon: Server,
    hint: "🎁 For You"
  }
];

interface ProjectsSectionProps {
  onProjectClick: (projectId: number) => void;
}

export const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">My Projects</h2>
          <p className="text-muted-foreground mb-2">
            Some of the things I've been working on
          </p>
          <p className="text-sm text-accent">
            Click any project to see something special ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card cursor-pointer group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project.id)}
            >
              {hoveredProject === project.id && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium z-10">
                  {project.hint}
                </div>
              )}

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                  <project.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="hover:bg-muted">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-muted">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};