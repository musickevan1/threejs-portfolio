interface CassetteDeckProps {
  isPlaying: boolean;
}

const CassetteDeck = ({ isPlaying }: CassetteDeckProps) => {
  return (
    <div className="relative aspect-[3/2] mb-8">
      <div className="absolute inset-0 bg-burgundy-900 rounded-lg shadow-inner">
        {/* Cassette window */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 bg-amber-900/20 rounded">
          {/* Spindles */}
          <div className="absolute top-1/2 left-[20%] -translate-y-1/2">
            <div className={`w-8 h-8 border-4 border-amber-500/30 rounded-full ${isPlaying ? 'animate-spin' : ''}`} />
          </div>
          <div className="absolute top-1/2 right-[20%] -translate-y-1/2">
            <div className={`w-8 h-8 border-4 border-amber-500/30 rounded-full ${isPlaying ? 'animate-spin' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CassetteDeck;