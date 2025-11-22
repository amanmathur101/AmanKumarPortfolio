import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PERSONAL_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // React Solution: Custom Scroll Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    // If href is just "#", scroll to top
    if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80; // Match the CSS scroll-padding-top or height of navbar
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center space-x-2 font-heading font-bold text-xl text-white z-50"
            >
              <Code className="text-primary" />
              <span>{PERSONAL_DETAILS.name.split(' ')[0]}</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-5 py-2.5 text-sm font-bold text-dark bg-primary rounded hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-card border-l border-slate-800 shadow-2xl z-50 md:hidden flex flex-col justify-center"
            >
              <div className="px-8 py-8 space-y-8">
                <div className="space-y-6">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="block text-xl font-heading font-medium text-slate-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block w-full text-center px-6 py-3 text-base font-bold text-dark bg-primary rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;