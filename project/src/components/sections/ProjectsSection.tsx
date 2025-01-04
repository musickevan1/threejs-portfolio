import { ProjectCard } from './ui/ProjectCard';
import SectionTransition from './ui/SectionTransition';

const ProjectsSection = () => (
  <SectionTransition>
    <div className="space-y-4 sm:space-y-6 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-display font-bold text-matrix-500">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectCard
          title="ML Image Classifier"
          description="Deep learning model for image classification using PyTorch"
          tech={['Python', 'PyTorch', 'NumPy', 'OpenCV']}
        />
        <ProjectCard
          title="Data Visualization Dashboard"
          description="Interactive dashboard for data analysis and visualization"
          tech={['React', 'D3.js', 'TypeScript', 'Vite']}
        />
      </div>
    </div>
  </SectionTransition>
);

export default ProjectsSection;