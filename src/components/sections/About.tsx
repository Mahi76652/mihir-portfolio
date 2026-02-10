import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';
import { aboutSummary } from '@/data/portfolioData';
import ScrollReveal from '@/components/ui/ScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Approaching challenges with analytical thinking and creativity'
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and methodologies'
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on delivering results that exceed expectations'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-cyan" />
              <span className="font-mono text-sm text-neon-cyan tracking-wider">ABOUT ME</span>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Who <span className="text-gradient-cyan">I Am</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Main content */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card-strong p-8 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-neon-cyan/30" />
                
                <div className="relative z-10">
                  <h3 className="font-mono text-2xl font-semibold text-white mb-6">
                    Professional Summary
                  </h3>
                  
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    {aboutSummary.trim().split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="font-mono text-3xl font-bold text-neon-cyan mb-1"
                      >
                        2+
                      </motion.div>
                      <div className="text-sm text-white/50">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="font-mono text-3xl font-bold text-neon-purple mb-1"
                      >
                        10+
                      </motion.div>
                      <div className="text-sm text-white/50">Projects</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="font-mono text-3xl font-bold text-neon-magenta mb-1"
                      >
                        4+
                      </motion.div>
                      <div className="text-sm text-white/50">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 * (index + 1)}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-6 h-full group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center mb-4 group-hover:shadow-neon transition-shadow duration-300">
                      <item.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h4 className="font-mono text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Quote */}
          <ScrollReveal delay={0.6} className="mt-16">
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-6xl text-neon-cyan/20">
                &ldquo;
              </div>
              <blockquote className="font-mono text-xl md:text-2xl text-white/80 italic">
                The only way to do great work is to love what you do.
              </blockquote>
              <cite className="block mt-4 text-white/50 not-italic">
                — Steve Jobs
              </cite>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
