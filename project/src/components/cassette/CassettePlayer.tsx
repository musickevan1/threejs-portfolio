import { useState, useEffect } from 'react';
import Controls from './Controls';
import Display from './Display';
import Cassette3D from './Cassette3D';
import Content from '../sections/Content';
import { useAutoScroll } from '../../hooks/useAutoScroll';

const CassettePlayer = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const { startAutoScroll } = useAutoScroll();

  useEffect(() => {
    if (isPlaying) {
      const stopAutoScroll = startAutoScroll(setCurrentSection);
      return () => stopAutoScroll();
    }
  }, [isPlaying]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    // Scroll to section when manually changed
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-burgundy-900/80 backdrop-blur rounded-xl shadow-2xl p-6 md:p-8">
        <Display currentSection={currentSection} isPlaying={isPlaying} />
        <div className="mb-8 rounded-lg overflow-hidden border-2 border-amber-500/20">
          <Cassette3D isPlaying={isPlaying} currentSection={currentSection} />
        </div>
        <Controls 
          onSectionChange={handleSectionChange}
          isPlaying={isPlaying}
          onPlayToggle={handlePlayToggle}
        />
      </div>
    </div>
  );
};

export default CassettePlayer;