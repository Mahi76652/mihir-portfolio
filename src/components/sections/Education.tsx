import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Trophy, BookOpen } from 'lucide-react';
import { education, certifications } from '@/data/portfolioData';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-green-400" />
              <span className="font-mono text-sm text-green-400 tracking-wider">EDUCATION</span>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Learning <span className="text-green-400">Journey</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              Academic background and professional certifications that shaped my technical foundation.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Card */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card-strong p-8 relative overflow-hidden h-full">
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-white/40 ml-2">education.json</span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-mono text-2xl font-bold text-white mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-green-400 font-medium">{education.field}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/60">
                      <BookOpen className="w-4 h-4 text-white/40" />
                      <span>{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <MapPin className="w-4 h-4 text-white/40" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <Calendar className="w-4 h-4 text-white/40" />
                      <span>{education.period}</span>
                    </div>
                  </div>

                  {/* CGPA */}
                  <div className="glass-card p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 font-mono text-sm">CGPA</span>
                      <span className="font-mono text-2xl font-bold text-green-400">
                        {education.cgpa}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-2 text-sm text-white/60"
                        >
                          <Trophy className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card-strong p-8 relative overflow-hidden h-full">
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-white/40 ml-2">certifications.json</span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="font-mono text-xl font-bold text-white">
                      Certifications
                    </h3>
                  </div>

                  <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                    {certifications.map((cert) => (
                      <StaggerItem key={cert.name}>
                        <motion.a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="block glass-card p-4 group cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-mono text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors mb-1">
                                {cert.name}
                              </h4>
                              <p className="text-xs text-white/50 mb-2">
                                {cert.provider}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-white/40">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {cert.date}
                                </span>
                                <span className="font-mono">ID: {cert.credentialId}</span>
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-neon-cyan transition-colors flex-shrink-0" />
                          </div>
                        </motion.a>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 glass-card">
                        <div className="font-mono text-2xl font-bold text-neon-cyan">
                          {certifications.length}
                        </div>
                        <div className="text-xs text-white/50">Certifications</div>
                      </div>
                      <div className="text-center p-3 glass-card">
                        <div className="font-mono text-2xl font-bold text-neon-purple">
                          2
                        </div>
                        <div className="text-xs text-white/50">ServiceNow</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-neon-purple/5 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
