export const SkillsSection = () => {
  const skills = [
    "Web Development", "Technical Support", "Hardware Troubleshooting", 
    "Software Diagnostics", "System Administration", "Problem Solving"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">What I Do</h2>
          <p className="text-muted-foreground">
            My core skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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