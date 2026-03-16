const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Shadcn/UI", "HTML/CSS"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    label: "System Design",
    skills: ["RBAC", "Data Consistency", "Idempotency", "Concurrency Handling"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["FFmpeg", "Icecast", "Cloudflare R2", "Redis", "Git"],
  },
  {
    label: "Payments & Integrations",
    skills: ["Paystack", "Split Payments"],
  },
];

const engineeringFocus = [
  "System boundaries & API architecture",
  "Component architecture & reusable UI patterns",
  "Data consistency & transactional workflows",
  "Responsive design & cross-browser compatibility",
  "Idempotent operations & failure recovery",
  "State management & performance optimization",
  "Auth systems (JWT, RBAC, role separation)",
  "Accessible UIs & modern design systems",
];

const Skills = () => {
  return (
    <section
      id='skills'
      className='py-24 px-6 relative notebook-paper border-t border-border/40'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10 pl-6 md:pl-0'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-4 mt-[6px] inline-block px-1'>
          Skills
        </p>
        <br />
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-12 inline-block px-1'>
          Technologies I work with
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-20 pt-4'>
          {skillGroups.map((group, index) => {
            // Cycle through slight rotations to look naturally placed
            const rotations = [
              "-rotate-1",
              "rotate-2",
              "-rotate-2",
              "rotate-1",
            ];
            const rotation = rotations[index % rotations.length];
            // Cycle through subtle pastel pink/blue/green colors to contrast with yellow
            const colors = [
              "bg-[#fdf2f8]",
              "bg-[#f0fdf4]",
              "bg-[#f0f9ff]",
              "bg-[#faf5ff]",
            ];
            const bgColor = colors[index % colors.length];

            return (
              <div
                key={group.label}
                className={`relative ${bgColor} p-6 flex flex-col shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] hover:z-30 transition-all duration-300 ${rotation}`}>
                {/* Simulated Tape */}
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 rotate-1 z-10'></div>

                <div className='mt-2'>
                  <h3 className='text-sm font-bold text-espresso uppercase tracking-wider mb-5'>
                    {group.label}
                  </h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className='text-sm font-medium text-espresso bg-white/40 border border-espresso/10 px-3 py-1.5'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Focus Checklist */}
        <div className='mt-20 relative z-20'>
          <h3 className='text-2xl md:text-3xl font-bold text-espresso mb-10 inline-block px-1'>
            Engineering Focus
          </h3>

          <div className='relative bg-[#fffbeb] p-8 md:p-10 shadow-[2px_4px_16px_rgba(0,0,0,0.1)] -rotate-[0.5deg]'>
            {/* Simulated Tape */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 rotate-1 z-10'></div>

            <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-2'>
              {engineeringFocus.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-espresso-light text-sm md:text-base leading-relaxed'>
                  <span className='text-terracotta font-bold text-base mt-0.5 shrink-0'>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
