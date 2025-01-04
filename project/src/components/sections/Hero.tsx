import { Github, Linkedin, Mail } from 'lucide-react';
import VinylPlayer from '../3d/VinylPlayer';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start pt-24">
      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-4">
          Evan Musick
        </h1>
        <p className="text-xl md:text-2xl text-amber-500/80 mb-8">
          Full Stack Developer & Audio Engineer
        </p>
        
        <div className="flex justify-center space-x-6">
          <SocialLink 
            href="https://github.com" 
            label="Visit GitHub Profile"
            icon={<Github className="h-6 w-6" aria-hidden="true" />} 
          />
          <SocialLink 
            href="https://linkedin.com" 
            label="Visit LinkedIn Profile"
            icon={<Linkedin className="h-6 w-6" aria-hidden="true" />} 
          />
          <SocialLink 
            href="mailto:contact@example.com" 
            label="Send Email"
            icon={<Mail className="h-6 w-6" aria-hidden="true" />} 
          />
        </div>
      </div>

      <VinylPlayer />
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, label, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-500 hover:text-amber-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;