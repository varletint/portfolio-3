interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Minaret Live",
    description:
      "A live audio streaming platform for mosques with Icecast integration, FFmpeg-powered auto-recording triggered by mount events, and Cloudflare R2 storage for session playback.",
    tech: ["Node.js", "TypeScript", "Icecast", "FFmpeg", "Cloudflare R2"],
    link: "https://saamee.vercel.app",
  },
  {
    title: "Lookupss",
    description:
      "An ERP-style SaaS platform helping Nigerian businesses manage inventory, sales, and expenses with a focus on local market fit and scalability.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    link: "https://lookupss.vercel.app",
  },
  {
    title: "Getick",
    description:
      "A ticketing system supporting Paystack split payments and automated financial reconciliation for events, built for the Nigerian market.",
    tech: ["Node.js", "TypeScript", "Paystack", "MongoDB", "Express"],
    link: "https://getick.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-24 px-6 relative notebook-paper border-t border-border/40'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10 pl-6 md:pl-0'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-4 mt-[6px] inline-block px-1'>
          Projects
        </p>
        <br />
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-12 inline-block px-1'>
          Things I've built
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-20 pt-4'>
          {projects.map((project, index) => {
            // Cycle through slight rotations to look naturally placed
            const rotations = [
              "rotate-1",
              "-rotate-2",
              "rotate-2",
              "-rotate-1",
            ];
            const rotation = rotations[index % rotations.length];
            // Cycle through subtle pastel yellow/beige colors
            const colors = ["bg-[#fefce8]", "bg-[#fef9c3]", "bg-[#fffbeb]"];
            const bgColor = colors[index % colors.length];

            return (
              <div
                key={project.title}
                className={`relative ${bgColor} p-6 flex flex-col justify-between shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] hover:z-30 transition-all duration-300 ${rotation}`}>
                {/* Simulated Tape */}
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 -rotate-1 z-10'></div>

                <div className='mt-2'>
                  <h3 className='text-xl font-bold text-espresso mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-espresso-light leading-relaxed mb-5'>
                    {project.description}
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-2 mt-auto pt-4'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className='text-xs font-semibold text-terracotta border border-terracotta/20 bg-terracotta/5 px-2 py-1'>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-auto p-1.5 text-espresso hover:text-terracotta transition-all hover:scale-110 border border-espresso/10 rounded-sm'
                      aria-label='Open Project'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path d='M7 7h10v10' />
                        <path d='M7 17 17 7' />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
