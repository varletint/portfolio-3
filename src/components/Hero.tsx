const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-6'>
      <div className='max-w-3xl text-center'>
        <p className='text-sm font-medium text-terracotta tracking-widest uppercase mb-4'>
          Software Engineer
        </p>
        <h1 className='text-5xl md:text-7xl font-bold text-espresso leading-tight mb-6'>
          Varletint
        </h1>
        <p className='text-lg md:text-xl text-espresso-light leading-relaxed max-w-2xl mx-auto mb-10'>
          Backend & full-stack engineer building scalable systems with Node.js,
          TypeScript, React and MongoDB. Based in Nigeria.
        </p>
        <div className='flex items-center justify-center gap-6'>
          <a
            href='#projects'
            className='inline-block px-8 py-3 bg-espresso text-beige text-sm font-medium tracking-wide hover:bg-espresso-light'>
            View Projects
          </a>
          <a
            href='#contact'
            className='inline-block px-8 py-3 border border-espresso text-espresso text-sm font-medium tracking-wide hover:bg-espresso hover:text-beige'>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
