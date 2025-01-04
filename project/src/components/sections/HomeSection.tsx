import { Github, Linkedin, Mail } from 'lucide-react';
import SectionTransition from './ui/SectionTransition';

const HomeSection = () => (
  <SectionTransition>
    <div className="space-y-4 sm:space-y-6 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-matrix-500 text-center sm:text-left">
        Evan Musick
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-mono text-matrix-400 text-center sm:text-left">
        Computer Science Student & ML Enthusiast
      </p>
      <div className="flex gap-4 justify-center sm:justify-start">
        <SocialLink href="https://github.com" icon={<Github className="w-5 h-5 sm:w-6 sm:h-6" />} label="GitHub" />
        <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />} label="LinkedIn" />
        <SocialLink href="mailto:contact@example.com" icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" />} label="Email" />
      </div>
    </div>
  </SectionTransition>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-matrix-500 hover:text-matrix-300 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default HomeSection;