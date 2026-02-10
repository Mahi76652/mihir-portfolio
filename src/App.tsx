import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootLoader from '@/components/loader/BootLoader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Interests from '@/components/sections/Interests';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { GridBackground, FloatingOrbs, ScanlineOverlay, NoiseTexture } from '@/components/ui/BackgroundEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setIsLoading(false);
      setContentVisible(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasSeenLoader', 'true');
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background effects */}
      <GridBackground />
      <FloatingOrbs />
      <ScanlineOverlay />
      <NoiseTexture />

      {/* Boot loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <BootLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {contentVisible && (
          <div className="relative z-10">
            <Navigation />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Interests />
              <Contact />
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
