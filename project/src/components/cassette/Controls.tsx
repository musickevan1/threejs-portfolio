import { Home, User, Briefcase, Mail, Play, Pause } from 'lucide-react';

interface ControlsProps {
  onSectionChange: (section: string) => void;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

const Controls = ({ onSectionChange, isPlaying, onPlayToggle }: ControlsProps) => {
  return (
    <div className="grid grid-cols-5 gap-4" role="navigation">
      <NavButton
        icon={<Home aria-hidden="true" />}
        label="Home Section"
        onClick={() => onSectionChange('home')}
      />
      <NavButton
        icon={<User aria-hidden="true" />}
        label="About Section"
        onClick={() => onSectionChange('about')}
      />
      <NavButton
        icon={isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        label={isPlaying ? 'Stop Auto-Scroll' : 'Start Auto-Scroll'}
        onClick={onPlayToggle}
        highlight
      />
      <NavButton
        icon={<Briefcase aria-hidden="true" />}
        label="Projects Section"
        onClick={() => onSectionChange('projects')}
      />
      <NavButton
        icon={<Mail aria-hidden="true" />}
        label="Contact Section"
        onClick={() => onSectionChange('contact')}
      />
    </div>
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
    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all
      ${highlight 
        ? 'bg-amber-500 text-burgundy-950 hover:bg-amber-400' 
        : 'bg-burgundy-900 text-amber-500 hover:bg-burgundy-800'
      }`}
    aria-label={label}
    type="button"
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default Controls;