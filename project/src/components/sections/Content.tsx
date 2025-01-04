import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface ContentProps {
  section: string;
}

const Content = ({ section }: ContentProps) => {
  return (
    <div id={section} className="scroll-mt-16">
      {renderSection(section)}
    </div>
  );
};

const renderSection = (section: string) => {
  switch (section) {
    case 'home':
      return <HomeSection />;
    case 'about':
      return <AboutSection />;
    case 'projects':
      return <ProjectsSection />;
    case 'contact':
      return <ContactSection />;
    default:
      return null;
  }
};

export default Content;