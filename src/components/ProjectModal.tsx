import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import Portal from "./Portal";
import { useCallback } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  company?: "We For Media" | "Feer McQueen";
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    if (previousActiveElement.current) {
      (previousActiveElement.current as HTMLElement).focus();
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const handleTab = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Lock scroll when modal opens
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTab);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore scroll when modal closes
      document.body.style.overflow = originalStyle;
    };
  }, [handleClose]);

  return (
    <Portal>
      <div className="fixed inset-0 z-[9999]">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-[2px] animate-fade-in"
          aria-hidden="true"
          onClick={handleClose}
        />

        {/* Modal Container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
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
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-futuristic-blue focus:ring-offset-2 focus:ring-offset-futuristic-darker"
                aria-label="Close modal"
              >
                <X size={20} className="text-white" />
              </button>
              
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
    </Portal>
  );
};

export default ProjectModal;
