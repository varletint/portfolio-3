const About = () => {
  return (
    <section
      id='about'
      className='py-24 px-6 relative notebook-paper border-t border-border/40'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-3xl mx-auto relative z-10 pl-6 md:pl-0'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-4 mt-[6px] bg-beige/80 inline-block px-1'>
          About
        </p>
        <br />
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-10 bg-beige/80 inline-block px-1'>
          A bit about me
        </h2>
        <div className='text-espresso-light leading-[40px] text-base md:text-lg'>
          <p className='bg-beige/80 inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            I'm Varletint, a software engineer from Nigeria with a Diploma and
            B.Sc. in Computer Science from Ibrahim Badamasi Babangida
            University, Lapai.
          </p>
          <div className='h-[40px]' aria-hidden='true'></div>
          <p className='bg-beige/80 inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            My main focus is backend and full-stack engineering — building
            scalable, production-grade systems with Node.js, TypeScript,
            Express, React, Next.js, and MongoDB. I think deeply about
            architecture: idempotency keys, payment state machines, caching with
            Redis, and event-driven designs.
          </p>
          <div className='h-[40px]' aria-hidden='true'></div>
          <p className='bg-beige/80 inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            On the frontend, I build clean, responsive interfaces with React and
            Next.js, always aiming for a seamless user experience that
            complements solid backend infrastructure.
          </p>
          <div className='h-[40px]' aria-hidden='true'></div>
          <p className='bg-beige/80 inline shadow-[0_0_10px_2px_rgba(250,246,241,0.8)] px-1'>
            Beyond code, I'm entrepreneurial — constantly thinking about
            monetization strategies, local Nigerian market fit, and building
            digital products that solve real problems. I also care about
            community: organizing groups to teach programming and planning
            initiatives to help others learn tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
