const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-terracotta tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-6">
          Let's work together
        </h2>
        <p className="text-espresso-light text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I'm always open to discussing new projects, backend architecture challenges, 
          or opportunities to build something impactful. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:idtacno@gmail.com"
            className="inline-block px-8 py-3 bg-espresso text-beige text-sm font-medium tracking-wide hover:bg-espresso-light"
          >
            idtacno@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/varletint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-espresso"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://x.com/varletint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-espresso"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
