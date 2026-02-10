import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <h3 className="font-mono text-2xl font-bold text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-white/50 text-sm">
                {personalInfo.title}
              </p>
            </div>

            {/* Quick links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/50 hover:text-neon-cyan transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg glass-card text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-neon-magenta fill-neon-magenta" />
              </motion.span>
              <span>using</span>
              <Code2 className="w-4 h-4 text-neon-cyan" />
            </div>

            <div className="font-mono">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors"
              >
                GitHub
              </a>
              <span className="text-white/20">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Version info */}
          <div className="mt-8 text-center">
            <span className="font-mono text-xs text-white/20">
              PORTFOLIO v2.0.26 | BUILT WITH REACT + TAILWIND + FRAMER MOTION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
