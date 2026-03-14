const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center p-4 sm:p-8 desk-bg'>
      {/* Notebook Document Wrapper */}
      <div className='w-full max-w-5xl relative'>
        {/* Notebook Page */}
        <div className='bg-[#fdfbf7] min-h-[75vh] rounded-r-2xl rounded-l-sm shadow-[0_15px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden notebook-paper p-8 pl-16 md:p-16 md:pl-32 flex flex-col justify-center'>
          {/* Vertical Red Margin Line */}
          <div className='absolute left-10 md:left-24 top-0 bottom-0 w-[2px] bg-terracotta/40 z-0' />

          {/* Content Content Container */}
          <div className='relative z-10'>
            <p className='text-sm md:text-base font-bold text-terracotta tracking-[0.2em] uppercase mb-4 bg-[#fdfbf7]/50 inline-block px-1'>
              Software Engineer
            </p>
            <h1 className='text-5xl md:text-[5rem] font-bold text-espresso leading-tight mb-8 mt-2 tracking-tight drop-shadow-sm'>
              Varletint
            </h1>
            <p className='text-xl md:text-2xl text-espresso-light leading-[40px] max-w-3xl mb-12 font-medium bg-[#fdfbf7]/60 inline-block'>
              Backend & full-stack engineer building scalable systems with
              Node.js, TypeScript, React and MongoDB. Based in Nigeria.
            </p>

            <div className='flex flex-wrap items-center gap-6 mt-4'>
              <a
                href='#projects'
                className='inline-flex items-center justify-center px-8 py-3.5 bg-espresso text-beige text-sm font-bold tracking-widest uppercase hover:bg-espresso-light transition-all shadow-lg hover:-translate-y-1'>
                View Projects
              </a>
              <a
                href='#contact'
                className='inline-flex items-center justify-center px-8 py-3.5 border-2 border-espresso text-espresso text-sm font-bold tracking-widest uppercase hover:bg-espresso hover:text-beige transition-all'>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Decorative Binder Holes */}
          <div className='absolute left-3 md:left-6 top-[20%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#4a3424] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' />
          <div className='absolute left-3 md:left-6 top-[50%] -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#4a3424] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' />
          <div className='absolute left-3 md:left-6 bottom-[20%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#4a3424] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
