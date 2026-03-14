import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between'>
        <a
          href='#'
          className='text-lg font-semibold text-espresso tracking-tight'>
          V
        </a>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8'>
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

        {/* Mobile Menu Toggle Button */}
        <button
          className='md:hidden p-2 text-espresso focus:outline-none'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'>
          {isMobileMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 border-b border-border"
            : "max-h-0 opacity-0"
        }`}>
        <div className=' backdrop-blur-sm px-6 py-4'>
          <ul className='flex flex-col gap-4'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='block text-base font-medium text-muted hover:text-espresso transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
