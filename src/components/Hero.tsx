const Hero = () => {
  return (
    <section className='min-h-screen pt-32 pb-24 px-6 relative notebook-paper flex flex-col justify-center'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-3xl mx-auto w-full relative z-10 pl-6 md:pl-0'>
        <p className='text-sm md:text-base font-bold text-terracotta tracking-[0.2em] uppercase mb-4 mt-[6px] bg-beige/80 inline-block px-1'>
          Software Engineer
        </p>
        <br />
        <h1 className='text-5xl md:text-[5rem] font-bold text-espresso leading-tight mb-8 mt-2 tracking-tight drop-shadow-sm bg-beige/80 inline-block px-1'>
          Varletint
        </h1>
        <div className='w-full'></div>
        <div className='text-xl md:text-2xl text-espresso-light leading-[40px] max-w-3xl mb-12 font-medium'>
          <p className='bg-beige/80 inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            Backend & full-stack engineer building scalable systems with
            Node.js, TypeScript, React and MongoDB. Based in Nigeria.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-6 mt-4 relative z-20'>
          <a
            href='#projects'
            className='inline-flex items-center justify-center px-8 py-3.5 bg-espresso text-beige text-sm font-bold tracking-widest uppercase hover:bg-espresso-light transition-all shadow-lg hover:-translate-y-1'>
            View Projects
          </a>
          <a
            href='#contact'
            className='inline-flex items-center justify-center px-8 py-3.5 border-2 border-espresso text-espresso text-sm font-bold tracking-widest uppercase hover:bg-espresso hover:text-beige transition-all bg-beige/80'>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
