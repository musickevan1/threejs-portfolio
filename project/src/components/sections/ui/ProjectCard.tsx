interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
}

export const ProjectCard = ({ title, description, tech }: ProjectCardProps) => (
  <div className="p-4 bg-matrix-900/30 backdrop-blur-sm rounded-lg border border-matrix-500/30">
    <h3 className="text-xl font-bold mb-2 text-matrix-300">{title}</h3>
    <p className="text-matrix-400 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map(t => (
        <span key={t} className="text-xs px-2 py-1 bg-matrix-800/50 text-matrix-300 rounded">
          {t}
        </span>
      ))}
    </div>
  </div>
);