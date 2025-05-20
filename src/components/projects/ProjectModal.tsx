import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import { Project } from "./projectData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Store the previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;
    
    // Focus the modal when it opens
    modalRef.current?.focus();

    // Lock scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // Restore focus when modal closes
      if (previousActiveElement.current) {
        (previousActiveElement.current as HTMLElement).focus();
      }
      // Restore scroll
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Handle keyboard interactions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999]"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-[2px] animate-fade-in"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          {/* Modal Content */}
          <div 
            ref={modalRef}
            className="relative w-[90vw] max-w-4xl bg-futuristic-darker border border-white/10 rounded-xl overflow-hidden animate-scale-in focus:outline-none"
            style={{
              boxShadow: '0 8px 32px rgba(0, 168, 255, 0.2)'
            }}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-futuristic-blue focus:ring-offset-2 focus:ring-offset-futuristic-darker"
              aria-label="Close modal"
            >
              <X size={20} className="text-white" />
            </button>
            
            {/* Header Section */}
            <div className="relative p-6 border-b border-white/10">
              <div className="mb-4">
                {project.company && (
                  <span className="inline-block px-3 py-1 bg-futuristic-blue/20 text-futuristic-blue-light text-xs rounded-full mb-2">
                    {project.company}
                  </span>
                )}
                <h2 id="modal-title" className="text-3xl font-bold">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-futuristic-blue/20 text-futuristic-blue-light text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div 
              className="p-6 pt-4 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: 'calc(90vh - 200px)' }}
            >
              <p className="text-futuristic-text-secondary mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                <p className="text-futuristic-text-secondary">
                  This website was built with a focus on performance, accessibility, and user experience.
                  The project involved custom WordPress theme development, responsive design implementation,
                  and ensuring the site works perfectly across all devices.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <ul className="list-disc pl-5 text-futuristic-text-secondary">
                  <li>WordPress Custom Theme Development</li>
                  <li>Advanced Custom Fields</li>
                  <li>Custom Post Types</li>
                  <li>Responsive Design</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-futuristic-blue text-white hover:bg-futuristic-blue-light transition-colors focus:outline-none focus:ring-2 focus:ring-futuristic-blue focus:ring-offset-2 focus:ring-offset-futuristic-darker"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Website <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 