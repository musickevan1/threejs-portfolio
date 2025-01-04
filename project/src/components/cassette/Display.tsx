interface DisplayProps {
  currentSection: string;
  isPlaying: boolean;
}

const Display = ({ currentSection, isPlaying }: DisplayProps) => {
  return (
    <div className="bg-amber-900/30 p-4 rounded-lg mb-6">
      <div className="font-mono text-amber-500 flex justify-between items-center">
        <span className="text-xl uppercase">{currentSection}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">{isPlaying ? 'PLAYING' : 'STOPPED'}</span>
          {isPlaying && (
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;