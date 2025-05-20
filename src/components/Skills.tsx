import React from "react";
import { Code, ShieldCheck, PenTool, Users } from "lucide-react";
import Card3D from "./ui/Card3D";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code size={28} />,
    title: "Programming & Tools",
    color: "blue",
    skills: [
      "TypeScript",
      "React.js",
      "JavaScript", 
      "PHP", 
      "C++", 
      "Java", 
      "SQL", 
      "MySQL",
      "Laravel", 
      "RESTful APIs",
      "Git & GitHub",
      "WordPress", 
      "Webflow", 
      "DraftBit"
    ],
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Security & Ethical Hacking",
    color: "purple",
    skills: [
      "Kali Linux", 
      "Web Application Firewall (WAF)",
      "XSS & SQLi Prevention",
      "Two-Factor Authentication (2FA)",
      "Security Headers (CSP, HSTS)",
      "HTTPS/SSL Enforcement",
      "Vulnerability Scanning",
      "Firewall Rules (iptables/ufw)",
      "Brute-Force Protection",
      "Security Logging & Monitoring"
    ],
  },
  {
    icon: <PenTool size={28} />,
    title: "Design & UI/UX",
    color: "green",
    skills: [
      "Photoshop", 
      "Illustrator", 
      "Figma"
    ],
  },
  {
    icon: <Users size={28} />,
    title: "Soft Skills",
    color: "orange",
    skills: [
      "Problem-Solving", 
      "Team Collaboration", 
      "Client-Focused Mindset"
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-futuristic-darker/50">
      <div className="container px-6 mx-auto">
        <h2 className="section-title text-center" data-text="My Skills">My Skills</h2>
        <p className="section-subtitle text-center">
          A diverse skillset crafted through years of learning and practical experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="perspective-container h-full">
              <Card3D 
                className="h-full" 
                glowColor={
                  category.color === "blue" ? "rgba(0, 168, 255, 0.5)" :
                  category.color === "purple" ? "rgba(110, 89, 165, 0.5)" :
                  category.color === "green" ? "rgba(0, 200, 150, 0.5)" :
                  "rgba(255, 150, 50, 0.5)"
                }
              >
                <div className="glass-card h-full p-8">
                  <div className={`
                    p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6
                    ${category.color === "blue" ? "bg-futuristic-blue/20 text-futuristic-blue" :
                      category.color === "purple" ? "bg-futuristic-purple/20 text-futuristic-purple-light" :
                      category.color === "green" ? "bg-green-500/20 text-green-400" :
                      "bg-orange-500/20 text-orange-400"}
                  `}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium 
                          ${category.color === "blue" ? "bg-futuristic-blue/10 text-futuristic-blue-light border border-futuristic-blue/30" :
                            category.color === "purple" ? "bg-futuristic-purple/10 text-futuristic-purple-light border border-futuristic-purple/30" :
                            category.color === "green" ? "bg-green-500/10 text-green-400 border border-green-500/30" :
                            "bg-orange-500/10 text-orange-400 border border-orange-500/30"}
                          transition-all duration-300 hover:scale-105
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
