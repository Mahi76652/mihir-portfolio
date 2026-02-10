import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="section-inner">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, '#hero')}
                className="font-mono text-lg font-bold text-white hover:text-neon-cyan transition-colors"
              >
                <span className="text-neon-cyan">&lt;</span>
                MPS
                <span className="text-neon-cyan">/&gt;</span>
              </a>

              {/* Desktop navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2 font-mono text-sm transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-neon-cyan'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-neon-cyan/10 rounded-lg -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <div className="hidden lg:block">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="px-4 py-2 rounded-lg font-mono text-sm bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  Hire Me
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass-card text-white/60 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 lg:hidden"
          >
            <div className="section-container">
              <div className="section-inner">
                <div className="glass-card-strong p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-3 rounded-lg font-mono text-sm transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'bg-neon-cyan/10 text-neon-cyan'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="block px-4 py-3 rounded-lg font-mono text-sm bg-neon-cyan/10 text-neon-cyan text-center mt-4"
                  >
                    Hire Me
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
