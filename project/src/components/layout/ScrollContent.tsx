import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const ScrollContent = () => {
  return (
    <div className="w-full">
      <div className="pt-20">
        <section id="home" className="min-h-screen flex items-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <HomeSection />
          </div>
        </section>
        
        <section id="about" className="min-h-screen flex items-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <AboutSection />
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <ProjectsSection />
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <ContactSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollContent;