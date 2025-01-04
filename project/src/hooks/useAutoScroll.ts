import { useEffect } from 'react';

const SECTIONS = ['home', 'about', 'projects', 'contact'];
const SCROLL_INTERVAL = 10000; // 10 seconds

export const useAutoScroll = (
  isPlaying: boolean,
  currentSection: string,
  setCurrentSection: (section: string) => void
) => {
  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        const currentIndex = SECTIONS.indexOf(currentSection);
        const nextIndex = (currentIndex + 1) % SECTIONS.length;
        const nextSection = SECTIONS[nextIndex];
        
        setCurrentSection(nextSection);
        document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' });
      }, SCROLL_INTERVAL);
    }

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [isPlaying, currentSection, setCurrentSection]);
};