import { Home, User, Briefcase, Mail, Play, Pause } from 'lucide-react';

interface ControlsProps {
  onSectionChange: (section: string) => void;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

const Controls = ({ onSectionChange, isPlaying, onPlayToggle }: ControlsProps) => {
  return (
    <nav className="bg-matrix-900/80 backdrop-blur p-2 sm:p-4 rounded-xl">
      <div className="grid grid-cols-5 gap-2 sm:gap-4">
        <NavButton
          icon={<Home className="w-4 h-4 sm:w-6 sm:h-6" />}
          label="Home"
          onClick={() => onSectionChange('home')}
        />
        <NavButton
          icon={<User className="w-4 h-4 sm:w-6 sm:h-6" />}
          label="About"
          onClick={() => onSectionChange('about')}
        />
        <NavButton
          icon={
            isPlaying ? 
              <Pause className="w-4 h-4 sm:w-6 sm:h-6" /> : 
              <Play className="w-4 h-4 sm:w-6 sm:h-6" />
          }
          label={isPlaying ? 'Stop' : 'Play'}
          onClick={onPlayToggle}
          highlight
        />
        <NavButton
          icon={<Briefcase className="w-4 h-4 sm:w-6 sm:h-6" />}
          label="Projects"
          onClick={() => onSectionChange('projects')}
        />
        <NavButton
          icon={<Mail className="w-4 h-4 sm:w-6 sm:h-6" />}
          label="Contact"
          onClick={() => onSectionChange('contact')}
        />
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  highlight?: boolean;
}

const NavButton = ({ icon, label, onClick, highlight }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-lg transition-all
      ${highlight 
        ? 'bg-matrix-500 text-matrix-950 hover:bg-matrix-400' 
        : 'bg-matrix-900 text-matrix-500 hover:bg-matrix-800'
      }`}
    aria-label={label}
    type="button"
  >
    {icon}
    <span className="text-xs sm:text-sm font-medium hidden xs:block">{label}</span>
  </button>
);

export default Controls;