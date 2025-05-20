import { ExternalLink } from "lucide-react";
import Card3D from "../ui/Card3D";
import { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="perspective-container h-full">
      <Card3D 
        className="cursor-pointer group h-full bg-futuristic-darker border border-white/5 hover:border-futuristic-blue/50 transition-all duration-500" 
        onClick={onClick}
        glowColor="rgba(0, 168, 255, 0.3)"
      >
        <div className="p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-3 group-hover:text-futuristic-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-futuristic-text-secondary text-sm mb-4 opacity-80 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-futuristic-blue/10 text-futuristic-blue-light text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.url && (
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={project.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-futuristic-blue hover:text-futuristic-blue-light transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Website <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          )}
        </div>
      </Card3D>
    </div>
  );
}; 