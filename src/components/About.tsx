import React from "react";
import Card3D from "./ui/Card3D";
import { BookOpen, Briefcase } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container px-6 mx-auto">
        <h2 className="section-title text-center" data-text="About Me">About Me</h2>
        <p className="section-subtitle text-center">
          A passionate developer with a focus on creating exceptional digital experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Education Card */}
          <div className="perspective-container">
            <Card3D className="h-full">
              <div className="glass-card h-full flex flex-col p-8">
                <div className="bg-futuristic-blue/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BookOpen className="text-futuristic-blue" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-blue-light">Baccalaureate Second Part ES</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">2019 - 2020</p>
                      <p className="mt-2">Graduated with Distinction</p>
                    </div>
                  </div>

                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-blue-light">Bachelor in Computer Science</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">2020 - 2025</p>
                      <p className="mt-2">Specialized in Software Engineering and Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Experience Card */}
          <div className="perspective-container">
            <Card3D className="h-full">
              <div className="glass-card h-full flex flex-col p-8">
                <div className="bg-futuristic-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Briefcase className="text-futuristic-purple-light" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-purple-light">WordPress Developer</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">We For Media</p>
                      <p className="mt-2">Developing and maintaining custom WordPress websites with a focus on performance and user experience.</p>
                    </div>
                  </div>
                  
                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-purple-light">Freelance Developer</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">WordPress & E-commerce</p>
                      <p className="mt-2">Creating custom solutions for clients, focusing on WordPress development and e-commerce platforms.</p>
                    </div>
                  </div>

                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-purple-light">WordPress & E-commerce Developer</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">Feer McQueen – Jeita</p>
                      <p className="mt-2">Developed and maintained custom WordPress and Shopify websites across various industries. Built tailored WordPress plugins, handled server-level optimizations, and ensured performance, security, and stability across all projects. Contributed to 20+ websites including corporate platforms, e-commerce stores, and landing pages.</p>
                    </div>
                  </div>

                  <div className="animated-border-box">
                    <div className="glass-card p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-futuristic-purple-light">General & Technical</h4>
                      <p className="text-sm text-futuristic-text-secondary mt-1">Feer McQueen – Jeita</p>
                      <p className="mt-2">Managed projects and clients, handled both general and technical responsibilities, and ensured successful delivery of digital solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
