const Navbar = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-border'>
      <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between'>
        <a
          href='#'
          className='text-lg font-semibold text-espresso tracking-tight'>
          V
        </a>
        <ul className='flex gap-8'>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-sm font-medium text-muted hover:text-espresso'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
