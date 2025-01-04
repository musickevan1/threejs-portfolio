export const BackgroundOverlay = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(0,26,0,0.7), rgba(0,26,0,0.6))'
      }}
      aria-hidden="true"
    />
  );
};