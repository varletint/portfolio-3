const Hero = () => {
  return (
    <section className='min-h-screen pt-32 pb-24 px-6 relative notebook-paper flex flex-col justify-center'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-3xl mx-auto w-full relative z-10 pl-6 md:pl-0'>
        <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4 mt-[6px]'>
          <p className='text-sm md:text-base font-bold text-terracotta tracking-[0.2em] uppercase bg-beige/80 inline-block px-1'>
            Software Engineer
          </p>
          <span className='text-espresso/30 text-sm hidden sm:inline'>•</span>
          <p className='text-sm md:text-base font-bold text-terracotta-dark tracking-[0.2em] uppercase bg-beige/80 inline-block px-1'>
            Fullstack Engineer
          </p>
        </div>
        <br />
        <h1 className='text-5xl md:text-[5rem] font-bold text-espresso leading-tight mb-8 mt-2 tracking-tight drop-shadow-sm bg-beige/80 inline-block px-1'>
          Varletint
        </h1>
        <div className='w-full'></div>
        <div className='text-xl md:text-2xl text-espresso-light leading-[40px] max-w-3xl mb-6 font-medium'>
          <p className='inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            Backend & full-stack engineer building scalable systems with
            Node.js, TypeScript, React and MongoDB. Based in Nigeria.
          </p>
        </div>
        <div className='text-base md:text-lg text-muted leading-[40px] max-w-3xl mb-12 font-medium'>
          <p className='inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            Strong systems design fundamentals — focused on reliable, secure
            applications with clear service boundaries and data consistency.
            Experienced in payment systems, e-commerce platforms, and business
            management tools.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-6 mt-6 relative z-20'>
          <a
            href='#projects'
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-[#fefce8] text-espresso text-sm font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] -rotate-1'>
            {/* Simulated Tape */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 rotate-1 z-10'></div>
            View Projects
          </a>
          <a
            href='#contact'
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-[#f0f9ff] text-espresso text-sm font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] rotate-1'>
            {/* Simulated Tape */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 -rotate-1 z-10'></div>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
