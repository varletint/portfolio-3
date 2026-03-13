const About = () => {
  return (
    <section id='about' className='py-24 px-6'>
      <div className='max-w-3xl mx-auto'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-3'>
          About
        </p>
        <h2 className='text-3xl md:text-4xl font-bold text-espresso mb-8'>
          A bit about me
        </h2>
        <div className='space-y-5 text-espresso-light leading-relaxed text-base md:text-lg'>
          <p>
            I'm Adam Abduljalil, a software engineer from Nigeria with a Diploma
            and B.Sc. in Computer Science from Ibrahim Badamasi Babangida
            University, Lapai.
          </p>
          <p>
            My main focus is backend and full-stack engineering — building
            scalable, production-grade systems with Node.js, TypeScript,
            Express, React, Next.js, and MongoDB. I think deeply about
            architecture: idempotency keys, payment state machines, caching with
            Redis, and event-driven designs.
          </p>
          <p>
            On the frontend, I build clean, responsive interfaces with React and
            Next.js, always aiming for a seamless user experience that
            complements solid backend infrastructure.
          </p>
          <p>
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
