import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, X, Cpu, Globe, Database, Brain } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const categoryIcons: Record<string, React.ElementType> = {
  'Full Stack': Layers,
  'Healthcare': Cpu,
  'Machine Learning': Brain,
  'E-Commerce': Database,
  'Web App': Globe
};

const categoryColors: Record<string, { border: string; badge: string; glow: string }> = {
  'Full Stack': {
    border: 'border-neon-cyan/30',
    badge: 'bg-neon-cyan/10 text-neon-cyan',
    glow: 'group-hover:shadow-neon'
  },
  'Healthcare': {
    border: 'border-green-400/30',
    badge: 'bg-green-400/10 text-green-400',
    glow: 'group-hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.3)]'
  },
  'Machine Learning': {
    border: 'border-neon-purple/30',
    badge: 'bg-neon-purple/10 text-neon-purple',
    glow: 'group-hover:shadow-neon-purple'
  },
  'E-Commerce': {
    border: 'border-neon-magenta/30',
    badge: 'bg-neon-magenta/10 text-neon-magenta',
    glow: 'group-hover:shadow-neon-magenta'
  },
  'Web App': {
    border: 'border-blue-400/30',
    badge: 'bg-blue-400/10 text-blue-400',
    glow: 'group-hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.3)]'
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-cyan" />
              <span className="font-mono text-sm text-neon-cyan tracking-wider">PROJECTS</span>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient-cyan">Missions</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              A collection of projects showcasing my skills in full-stack development, 
              machine learning, and problem-solving.
            </p>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={0.2} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`
                    px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
                    ${filter === category 
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50' 
                      : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const CategoryIcon = categoryIcons[project.category] || Layers;
                const colors = categoryColors[project.category];
                
                return (
                  <StaggerItem key={project.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedProject(project)}
                      className={`
                        group glass-card-strong p-6 cursor-pointer h-full
                        ${colors?.border} border
                        ${colors?.glow} transition-shadow duration-300
                      `}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`
                          w-12 h-12 rounded-lg flex items-center justify-center
                          ${colors?.badge}
                        `}>
                          <CategoryIcon className="w-6 h-6" />
                        </div>
                        <span className={`
                          px-2 py-1 text-xs font-mono rounded
                          ${colors?.badge}
                        `}>
                          {project.category}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="font-mono text-xl font-semibold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-3">{project.subtitle}</p>
                      <p className="text-sm text-white/60 line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-white/5 text-white/50 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-mono bg-white/5 text-white/50 rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action hint */}
                      <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-neon-cyan transition-colors">
                        <span className="font-mono">View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </AnimatePresence>
          </StaggerContainer>

          {/* Project modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass-card-strong w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-white/60" />
                  </button>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`
                      px-3 py-1 text-xs font-mono rounded
                      ${categoryColors[selectedProject.category]?.badge}
                    `}>
                      {selectedProject.category}
                    </span>
                  </div>

                  <h2 className="font-mono text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-white/60 mb-6">{selectedProject.subtitle}</p>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-mono text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="text-neon-cyan mt-0.5">›</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <h3 className="font-mono text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-mono bg-white/5 text-white/70 rounded-lg border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
