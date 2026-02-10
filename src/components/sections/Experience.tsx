import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/portfolioData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-magenta" />
              <span className="font-mono text-sm text-neon-magenta tracking-wider">EXPERIENCE</span>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Work <span className="text-gradient-purple">History</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              My professional journey from intern to junior developer, 
              showcasing growth and hands-on experience.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta md:-translate-x-1/2" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={0.1 * index}>
                  <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                      <motion.div
                        className="w-full h-full rounded-full bg-black border-2 border-neon-cyan"
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-full h-full rounded-full bg-neon-cyan animate-pulse" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <motion.div
                        className="glass-card-strong p-6 cursor-pointer"
                        onClick={() => toggleExpand(exp.id)}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase className="w-4 h-4 text-neon-cyan" />
                              <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider">
                                {exp.type}
                              </span>
                            </div>
                            <h3 className="font-mono text-xl font-semibold text-white">
                              {exp.role}
                            </h3>
                            <p className="text-white/70">{exp.company}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-white/50" />
                          </motion.div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-white/60 text-sm mb-4">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-mono bg-white/5 text-white/60 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Expandable content */}
                        <AnimatePresence>
                          {expandedId === exp.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-white/10">
                                <h4 className="font-mono text-sm font-semibold text-white mb-3">
                                  Key Responsibilities:
                                </h4>
                                <ul className="space-y-2">
                                  {exp.responsibilities.map((resp, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start gap-2 text-sm text-white/60"
                                    >
                                      <span className="text-neon-cyan mt-1">›</span>
                                      {resp}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand hint */}
                        <div className="mt-4 text-center">
                          <span className="text-xs text-white/30 font-mono">
                            {expandedId === exp.id ? 'Click to collapse' : 'Click to expand'}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.4} className="mt-16 text-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-white/70 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-mono text-sm">View Full LinkedIn Profile</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
