const Footer = () => {
  return (
    <footer className='py-6 px-6 relative notebook-paper border-t border-border/40'>
      {/* Vertical Red Margin Line */}
      <div className='absolute left-8 md:left-[15%] top-0 bottom-0 w-[2px] bg-terracotta/30 z-0 pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10 pl-6 md:pl-0 flex flex-wrap items-center justify-between gap-6 pt-4 text-xs font-semibold uppercase tracking-wider text-espresso'>
        {/* Left Sticky Note Element */}
        <div className='relative bg-[#fefce8] px-4 py-2 shadow-[2px_4px_8px_rgba(0,0,0,0.1)] -rotate-1 hover:scale-105 transition-transform duration-300'>
          <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-espresso backdrop-blur-sm shadow-sm opacity-80 border-t border-b border-white/40 rotate-2 z-10'></div>
          © {new Date().getFullYear()} Varletint
        </div>
      </div>
    </footer>
  );
};

export default Footer;
