import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolioData';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const categoryColors: Record<string, { border: string; glow: string; icon: string }> = {
  'Data Science & Machine Learning': {
    border: 'border-neon-cyan/30',
    glow: 'hover:shadow-neon',
    icon: 'text-neon-cyan'
  },
  'Web Development & Backend': {
    border: 'border-neon-purple/30',
    glow: 'hover:shadow-neon-purple',
    icon: 'text-neon-purple'
  },
  'Databases & Tools': {
    border: 'border-neon-magenta/30',
    glow: 'hover:shadow-neon-magenta',
    icon: 'text-neon-magenta'
  },
  'ServiceNow Platform': {
    border: 'border-green-400/30',
    glow: 'hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.3)]',
    icon: 'text-green-400'
  }
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-purple" />
              <span className="font-mono text-sm text-neon-purple tracking-wider">SKILLS</span>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="text-gradient-purple">Expertise</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              A comprehensive toolkit built through hands-on project experience, 
              certifications, and continuous learning.
            </p>
          </ScrollReveal>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <ScrollReveal key={category} delay={0.1 * categoryIndex}>
                <motion.div
                  className={`glass-card-strong p-6 h-full ${categoryColors[category]?.border} border`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full ${categoryColors[category]?.icon.replace('text-', 'bg-')}`} />
                    <h3 className="font-mono text-lg font-semibold text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
                    {skillList.map((skill) => (
                      <StaggerItem key={skill}>
                        <motion.span
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`
                            inline-flex items-center px-4 py-2 rounded-lg
                            font-mono text-sm
                            bg-white/5 border border-white/10
                            transition-all duration-300 cursor-default
                            ${hoveredSkill === skill ? categoryColors[category]?.glow : ''}
                            ${hoveredSkill === skill ? 'border-opacity-50' : ''}
                          `}
                          style={{
                            borderColor: hoveredSkill === skill 
                              ? `var(--${categoryColors[category]?.icon.replace('text-', '')})` 
                              : undefined
                          }}
                          whileHover={{ y: -2 }}
                        >
                          <span className={categoryColors[category]?.icon}>
                            {skill}
                          </span>
                        </motion.span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Decorative element */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-white/40 font-mono">
                      <span>{skillList.length} technologies</span>
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${categoryColors[category]?.icon.replace('text-', 'bg-')} animate-pulse`} />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Skill proficiency visualization */}
          <ScrollReveal delay={0.5} className="mt-16">
            <div className="glass-card-strong p-8">
              <h3 className="font-mono text-xl font-semibold text-white mb-8 text-center">
                Proficiency Overview
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: 'Frontend', value: 85, color: 'from-neon-cyan to-neon-blue' },
                  { label: 'Backend', value: 80, color: 'from-neon-purple to-neon-magenta' },
                  { label: 'Data Science', value: 75, color: 'from-neon-magenta to-pink-500' },
                  { label: 'ServiceNow', value: 70, color: 'from-green-400 to-emerald-500' }
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-white/10"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <motion.path
                          className={`bg-gradient-to-r ${item.color}`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: '0 100' }}
                          whileInView={{ strokeDasharray: `${item.value} 100` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className={`text-${item.color.split(' ')[0].replace('from-', '')}`} stopColor="currentColor" />
                            <stop offset="100%" className={`text-${item.color.split(' ')[1]}`} stopColor="currentColor" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xl font-bold text-white">
                          {item.value}%
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ATS-friendly plain text fallback */}
          <ScrollReveal delay={0.6} className="mt-12">
            <div className="text-center">
              <p className="text-xs text-white/30 font-mono">
                KEYWORDS: Python, JavaScript, React.js, Node.js, MongoDB, MySQL, 
                Machine Learning, Data Science, ServiceNow, HTML, CSS, Git, REST APIs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
