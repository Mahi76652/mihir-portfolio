import { motion } from 'framer-motion';
import { Bike, Trophy, Music, BookOpen } from 'lucide-react';
import { interests } from '@/data/portfolioData';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Bike,
  Trophy,
  Music,
  BookOpen
};

export default function Interests() {
  return (
    <section id="interests" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-magenta" />
              <span className="font-mono text-sm text-neon-magenta tracking-wider">INTERESTS</span>
              <div className="w-12 h-px bg-neon-magenta" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond <span className="text-neon-magenta">Code</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me pursuing these passions 
              that keep me balanced and inspired.
            </p>
          </ScrollReveal>

          {/* Interests grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {interests.map((interest) => {
              const Icon = iconMap[interest.icon] || BookOpen;
              
              return (
                <StaggerItem key={interest.name}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card-strong p-6 text-center group cursor-default h-full"
                  >
                    {/* Animated icon container */}
                    <motion.div
                      className="relative w-20 h-20 mx-auto mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-neon-magenta/20 blur-xl group-hover:bg-neon-magenta/30 transition-colors duration-300" />
                      
                      {/* Icon background */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-neon-magenta/20 to-purple-500/20 flex items-center justify-center border border-neon-magenta/30 group-hover:border-neon-magenta/50 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-neon-magenta" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-mono text-lg font-semibold text-white mb-2 group-hover:text-neon-magenta transition-colors">
                      {interest.name}
                    </h3>
                    <p className="text-sm text-white/50">
                      {interest.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      className="mt-4 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Quote */}
          <ScrollReveal delay={0.5} className="mt-16">
            <div className="glass-card-strong p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />
              
              <div className="relative z-10">
                <div className="font-mono text-4xl text-neon-magenta/20 mb-4">
                  &ldquo;
                </div>
                <blockquote className="font-mono text-lg md:text-xl text-white/80 italic mb-4">
                  Life is like riding a bicycle. To keep your balance, you must keep moving.
                </blockquote>
                <cite className="text-white/50 not-italic font-mono text-sm">
                  — Albert Einstein
                </cite>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
