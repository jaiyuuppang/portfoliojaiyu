import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Server, MessageSquare } from 'lucide-react';

const fakeProjects = [
  {
    id: 1,
    title: "Support Ticket System",
    description: "Built a comprehensive ticket management system with real-time updates and automated workflows.",
    tech: ["Node.js", "PostgreSQL", "React", "WebSocket"],
    icon: MessageSquare,
    hint: "P.A.U. System"
  },
  {
    id: 2,
    title: "Database Performance Monitor",
    description: "Created monitoring dashboard for database performance with custom alerting and optimization suggestions.",
    tech: ["Python", "MySQL", "Redis", "Grafana"],
    icon: Database,
    hint: "Birthday Analytics"
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "Developed scalable API gateway with authentication, rate limiting, and request routing.",
    tech: ["Express.js", "MongoDB", "JWT", "Docker"],
    icon: Server,
    hint: "Special Day API"
  }
];

interface ProjectsSectionProps {
  onProjectClick: (projectId: number) => void;
}

export const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of my latest work in backend development and technical solutions.
            <br />
            <span className="text-sm text-accent">
              (Hint: Click on any project for a special surprise! 🎁)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fakeProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card cursor-pointer relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project.id)}
            >
              {/* Special Birthday Hint */}
              {hoveredProject === project.id && (
                <div className="absolute -top-2 -right-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium animate-bounce-gentle z-10">
                  {project.hint}
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{project.title}</h3>
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
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-accent hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>

              {/* Sparkle effect on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent text-xl animate-bounce-gentle">✨</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more work or discuss a project?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};