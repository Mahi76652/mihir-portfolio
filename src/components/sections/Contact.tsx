import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="section-inner">
          {/* Section header */}
          <ScrollReveal className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-neon-cyan" />
              <span className="font-mono text-sm text-neon-cyan tracking-wider">CONTACT</span>
              <div className="w-12 h-px bg-neon-cyan" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-gradient-cyan">Connect</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I&apos;d love to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas, 
                    or opportunities to be part of your vision. Feel free to reach 
                    out through any of the channels below.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <Mail className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">Email</p>
                      <p className="text-white group-hover:text-neon-cyan transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${personalInfo.phone}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                      <Phone className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">Phone</p>
                      <p className="text-white group-hover:text-neon-purple transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 glass-card"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-magenta/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-neon-magenta" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-sm text-white/50 mb-4">Connect on social media</p>
                  <div className="flex gap-4">
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-4 rounded-lg glass-card text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-4 rounded-lg glass-card text-white/60 hover:text-neon-purple hover:border-neon-purple/50 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card-strong p-8">
                <h3 className="font-mono text-xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="font-mono text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-white/60">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-white/60 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
