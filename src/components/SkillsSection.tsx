import { Server, Database, MessageSquare, Code2, Shield, Wrench } from 'lucide-react';

const skills = [
  {
    icon: MessageSquare,
    title: "Technical Support",
    description: "Expert problem-solving and customer assistance",
    level: "Expert"
  },
  {
    icon: Server,
    title: "Backend Development", 
    description: "APIs, databases, and server-side solutions",
    level: "Advanced"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "SQL, optimization, and data architecture",
    level: "Advanced"
  },
  {
    icon: Code2,
    title: "System Integration",
    description: "Connecting systems and automating workflows",
    level: "Proficient"
  },
  {
    icon: Shield,
    title: "Security & Monitoring",
    description: "System security and performance monitoring",
    level: "Proficient"
  },
  {
    icon: Wrench,
    title: "DevOps & Deployment",
    description: "CI/CD, containerization, and infrastructure",
    level: "Intermediate"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Focused on backend systems, technical support, and building reliable solutions 
            that solve real problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="portfolio-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <span className="skill-badge text-xs">{skill.level}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};