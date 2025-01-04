import { create } from 'zustand';
import { AudioStore } from '../types';

const useAudioStore = create<AudioStore>((set, get) => ({
  isMuted: false,
  isPlaying: false,
  currentTrack: null,
  toggleMute: () => set(state => ({ isMuted: !state.isMuted })),
  playSound: (soundId: string) => {
    if (get().isMuted) return;
    
    // Sound implementation will be added later
    console.log(`Playing sound: ${soundId}`);
  },
  setCurrentTrack: (track: string | null) => set({ currentTrack: track }),
  togglePlay: () => set(state => ({ isPlaying: !state.isPlaying }))
}));