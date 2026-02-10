import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '',
  onComplete 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({ 
  texts, 
  interval = 3000, 
  className = '' 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
}

export function GlitchText({ 
  text, 
  className = '',
  triggerOnHover = true 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }
  };

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-neon-cyan"
            initial={{ x: -2, opacity: 0.8 }}
            animate={{ x: 2, opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 0.1, repeat: 2 }}
            aria-hidden
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-neon-magenta"
            initial={{ x: 2, opacity: 0.8 }}
            animate={{ x: -2, opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 0.1, repeat: 2 }}
            aria-hidden
          >
            {text}
          </motion.span>
        </>
      )}
    </span>
  );
}

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
