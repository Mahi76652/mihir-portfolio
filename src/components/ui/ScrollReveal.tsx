import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  once = true,
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up'
}: StaggerItemProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: 20 };
      case 'right': return { x: -20 };
      default: return { y: 20 };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = '',
  speed = 0.5
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform'
      }}
      whileInView={{
        y: speed * 50
      }}
      transition={{
        type: 'tween',
        ease: 'linear'
      }}
    >
      {children}
    </motion.div>
  );
}
