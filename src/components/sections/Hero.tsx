import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, FolderGit2, ChevronDown, Linkedin, Github } from 'lucide-react';
import { personalInfo, roles } from '@/data/portfolioData';
import { GlitchText } from '@/components/ui/AnimatedText';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Radial glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(0, 255, 255, 0.08) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-neon-cyan/20" />
      <div className="absolute top-20 right-8 w-24 h-24 border-r-2 border-t-2 border-neon-cyan/20" />
      <div className="absolute bottom-20 left-8 w-24 h-24 border-l-2 border-b-2 border-neon-cyan/20" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-neon-cyan/20" />

      {/* Main content */}
      <div className="relative z-10 section-container">
        <div className="section-inner text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-sm text-white/70">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            <GlitchText text={personalInfo.name} />
          </motion.h1>

          {/* Role rotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-12 mb-8"
          >
            <div className="font-mono text-xl sm:text-2xl md:text-3xl">
              <span className="text-white/50">{'<'}</span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="inline-block mx-3 text-gradient-cyan"
              >
                {roles[currentRoleIndex]}
              </motion.span>
              <span className="text-white/50">{'/>'}</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-12"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2"
            >
              <FolderGit2 className="w-5 h-5" />
              View Projects
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 text-white/80 hover:bg-white/5 hover:border-white/40 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-4"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card text-white/60 hover:text-neon-purple hover:border-neon-purple/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg glass-card text-white/60 hover:text-neon-magenta hover:border-neon-magenta/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-neon-cyan transition-colors"
        >
          <span className="font-mono text-xs tracking-wider">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="font-mono text-xs text-white/40 tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
          DEVELOPER
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="font-mono text-xs text-white/40 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          PORTFOLIO v2.0
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
