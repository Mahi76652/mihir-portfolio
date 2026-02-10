import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootLoaderProps {
  onComplete: () => void;
}

const bootLogs = [
  { text: 'INITIALIZING SYSTEM...', delay: 0 },
  { text: 'LOADING CORE MODULES...', delay: 300 },
  { text: 'MOUNTING COMPONENTS...', delay: 600 },
  { text: 'ESTABLISHING CONNECTION...', delay: 900 },
  { text: 'RENDERING INTERFACE...', delay: 1200 },
  { text: 'SYSTEM READY', delay: 1500 },
];

export default function BootLoader({ onComplete }: BootLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<number[]>([]);
  const [skipped, setSkipped] = useState(false);

  const skipLoader = useCallback(() => {
    if (!skipped) {
      setSkipped(true);
      setProgress(100);
      setTimeout(onComplete, 300);
    }
  }, [skipped, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        skipLoader();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [skipLoader]);

  useEffect(() => {
    bootLogs.forEach((log, index) => {
      setTimeout(() => {
        setVisibleLogs(prev => [...prev, index]);
      }, log.delay);
    });

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const autoSkipTimeout = setTimeout(() => {
      if (progress < 100) {
        skipLoader();
      }
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(autoSkipTimeout);
    };
  }, [onComplete, skipLoader, progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={skipLoader}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            <span className="text-neon-cyan">&lt;</span>
            SYSTEM BOOT
            <span className="text-neon-cyan">/&gt;</span>
          </h1>
          <p className="font-mono text-sm text-white/50 tracking-widest">
            PORTFOLIO v2.0.26
          </p>
        </motion.div>

        {/* Terminal logs */}
        <div className="glass-card-strong p-6 mb-8 min-h-[200px]">
          <div className="font-mono text-sm space-y-2">
            <AnimatePresence>
              {visibleLogs.map((logIndex) => (
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-neon-cyan">{'>'}</span>
                  <span className={logIndex === bootLogs.length - 1 ? 'text-neon-magenta' : 'text-white/80'}>
                    {bootLogs[logIndex].text}
                  </span>
                  {logIndex === bootLogs.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-2 h-4 bg-neon-magenta"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between font-mono text-xs text-white/50 mb-2">
            <span>PROGRESS</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Skip button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={skipLoader}
            className="font-mono text-xs text-white/40 hover:text-neon-cyan transition-colors duration-300 tracking-wider"
          >
            [PRESS ENTER OR CLICK TO SKIP]
          </button>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30" />
    </motion.div>
  );
}
