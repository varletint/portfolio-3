const Contact = () => {
  return (
    <section
      id='contact'
      className='py-24 px-6 relative notebook-paper border-t border-border/40'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10 pl-6 md:pl-0 text-left'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-4 mt-[6px] inline-block px-1'>
          Contact
        </p>
        <br />
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-6 inline-block px-1'>
          Let's work together
        </h2>

        <div className='text-espresso-light leading-[40px] text-base md:text-lg mb-10'>
          <p className='inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            I'm always open to discussing new projects, backend architecture
            challenges, or opportunities to build something impactful. Feel free
            to reach out.
          </p>
          <div className='h-[40px]' aria-hidden='true'></div>
          <p className='inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            Whether it's systems architecture, payment integrations, e-commerce
            platforms, or full-stack product builds — I'd love to connect and
            explore how we can work together.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row flex-wrap items-start gap-8 md:gap-12 mt-4 relative z-20 pt-4'>
          <a
            href='mailto:idtacno@gmail.com'
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-[#fef9c3] text-espresso text-sm font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] -rotate-1'>
            {/* Simulated Tape */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 rotate-1 z-10'></div>
            idtacno@gmail.com
          </a>

          <div className='relative inline-flex items-center justify-center gap-6 px-8 py-3.5 bg-[#fdf2f8] text-espresso text-sm font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_24px_rgba(0,0,0,0.15)] rotate-1'>
            {/* Simulated Tape */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 -rotate-1 z-10'></div>
            <a
              href='https://github.com/varletint'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-espresso-light transition-colors'>
              GitHub
            </a>
            <span className='text-espresso/30'>|</span>
            <a
              href='https://x.com/varletint'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-espresso-light transition-colors'>
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
