const Footer = () => {
  return (
    <footer className='py-6 px-6 border-t border-border'>
      <div className='max-w-5xl mx-auto flex items-center justify-between text-xs text-muted'>
        <span>© {new Date().getFullYear()} Varletint</span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
