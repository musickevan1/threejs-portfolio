import { Code, Brain } from 'lucide-react';
import { SkillCard } from './ui/SkillCard';
import SectionTransition from './ui/SectionTransition';

const AboutSection = () => (
  <SectionTransition>
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-matrix-500">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard 
          icon={<Code />}
          title="Development"
          skills={['Python', 'TypeScript', 'React', 'Node.js']}
        />
        <SkillCard
          icon={<Brain />}
          title="Data Science"
          skills={['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas']}
        />
      </div>
    </div>
  </SectionTransition>
);

export default AboutSection;