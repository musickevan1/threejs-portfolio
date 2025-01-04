interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <div className="p-4 bg-matrix-900/30 backdrop-blur-sm rounded-lg border border-matrix-500/30">
    <div className="flex items-center gap-2 mb-3 text-matrix-300">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-1 text-matrix-400">
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);