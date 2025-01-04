import { create } from 'zustand';
import { LoadingStore } from '../types';

const useLoadingStore = create<LoadingStore>((set) => ({
  progress: 0,
  isLoaded: false,
  setProgress: (progress) => set({ progress }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));

export default useLoadingStore;