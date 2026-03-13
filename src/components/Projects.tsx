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
  },
  {
    title: "Lookupss",
    description:
      "An ERP-style SaaS platform helping Nigerian businesses manage inventory, sales, and expenses with a focus on local market fit and scalability.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Getick",
    description:
      "A ticketing system supporting Paystack split payments and automated financial reconciliation for events, built for the Nigerian market.",
    tech: ["Node.js", "TypeScript", "Paystack", "MongoDB", "Express"],
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-6 bg-cream'>
      <div className='max-w-5xl mx-auto'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-3'>
          Projects
        </p>
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-12'>
          Things I've built
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='bg-beige border border-border p-6 flex flex-col justify-between'>
              <div>
                <h3 className='text-xl font-semibold text-espresso mb-3'>
                  {project.title}
                </h3>
                <p className='text-sm text-espresso-light leading-relaxed mb-5'>
                  {project.description}
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className='text-xs font-medium text-muted border border-border px-2.5 py-1'>
                    {t}
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

export default Projects;
