export const SkillsSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "PostgreSQL", "MongoDB", "Express.js", "REST APIs",
    "Tailwind CSS", "Docker", "AWS", "Tech Support",
    "Hardware Troubleshooting", "Software Diagnostics", "System Administration", "Network Configuration"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Core Expertise</h2>
          <p className="text-muted-foreground">
            Full-stack development and technical support expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-badge justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};