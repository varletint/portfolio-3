const skillGroups = [
  {
    label: "Languages & Runtime",
    skills: ["TypeScript", "JavaScript", "Node.js"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend & APIs",
    skills: ["Express", "REST APIs", "Event-Driven Architecture"],
  },
  {
    label: "Databases & Caching",
    skills: ["MongoDB", "Redis", "PostgreSQL"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["FFmpeg", "Icecast", "Cloudflare R2", "Git"],
  },
  {
    label: "Payments & Integrations",
    skills: ["Paystack", "Split Payments"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-terracotta tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-12">
          Technologies I work with
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-espresso bg-cream border border-border px-3 py-1.5"
                  >
                    {skill}
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

export default Skills;
