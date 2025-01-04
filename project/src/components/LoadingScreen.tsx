import React from 'react';
import useLoadingStore from '../store/loadingStore';

const LoadingScreen: React.FC = () => {
  const { isLoaded } = useLoadingStore();
  
  if (isLoaded) return null;
  
  return (
    <div className="fixed inset-0 bg-burgundy-950 z-50 flex items-center justify-center">
      <div className="w-64 relative">
        <div className="h-2 bg-amber-900/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-300 rounded-full w-full"
          />
        </div>
        <div className="mt-4 text-amber-500 text-center font-mono">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;