import { useState } from 'react';
import Controls from './components/navigation/Controls';
import ScrollContent from './components/layout/ScrollContent';
import InitialLoadAnimation from './components/animation/InitialLoadAnimation';
import { BinaryBackground } from './components/effects/BinaryBackground';
import { BackgroundOverlay } from './components/effects/BackgroundOverlay';
import { useAutoScroll } from './hooks/useAutoScroll';

export function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  
  useAutoScroll(isPlaying, currentSection, setCurrentSection);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <BinaryBackground />
      </div>
      <BackgroundOverlay />
      
      <div className="relative z-10">
        <InitialLoadAnimation />
        
        {/* Fixed navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="w-full max-w-5xl mx-auto">
            <Controls 
              onSectionChange={handleSectionChange}
              isPlaying={isPlaying}
              onPlayToggle={() => setIsPlaying(!isPlaying)}
            />
          </div>
        </div>
        
        {/* Content */}
        <ScrollContent />
      </div>
    </div>
  );
}