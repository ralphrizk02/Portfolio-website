import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectModal } from "./projects/ProjectModal";
import { ProjectCard } from "./projects/ProjectCard";
import { Project, projects } from "./projects/projectData";

type CompanyFilter = "all" | "We For Media" | "Feer McQueen";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCompany, setActiveCompany] = useState<CompanyFilter>("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setVisibleProjects(
      activeCompany === "all"
        ? projects
        : projects.filter(project => project.company === activeCompany)
    );
  }, [activeCompany]);

  const filterButtons: { label: string; value: CompanyFilter }[] = [
    { label: "All Projects", value: "all" },
    { label: "We For Media", value: "We For Media" },
    { label: "Feer McQueen", value: "Feer McQueen" }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32" data-animate>
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title" data-text="My Projects">My Projects</h2>
          <p className="section-subtitle">
            Showcasing my client work and development expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCompany(value)}
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-300",
                activeCompany === value
                  ? "bg-futuristic-blue text-white"
                  : "bg-futuristic-darker border border-futuristic-blue/30 text-futuristic-text-secondary hover:border-futuristic-blue/50"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
