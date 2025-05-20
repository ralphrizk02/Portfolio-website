import React, { useState } from "react";
import { Send, Github, Linkedin, Mail, Instagram, Phone } from "lucide-react";
import Card3D from "./ui/Card3D";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-futuristic-darker/50">
      <div className="container px-6 mx-auto">
        <h2 className="section-title text-center" data-text="Get In Touch">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Let's discuss your project and build something amazing together
        </p>

        <div className="max-w-4xl mx-auto mt-16">
          <Card3D>
            <div className="glass-card p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-futuristic-text-secondary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-futuristic-blue/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-futuristic-text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-futuristic-blue/50 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-futuristic-text-secondary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-futuristic-blue/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-futuristic-blue text-white rounded-lg hover:bg-futuristic-blue-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
                
                {/* Contact Information */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                    <p className="text-futuristic-text-secondary mb-8">
                      Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href="mailto:ralphrizk02@gmail.com"
                        className="flex items-center space-x-3 text-futuristic-text-secondary hover:text-futuristic-blue transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-futuristic-blue/10 transition-colors">
                          <Mail size={18} />
                        </div>
                        <span>ralphrizk02@gmail.com</span>
                      </a>
                      
                      <a
                        href="tel:+96176151957"
                        className="flex items-center space-x-3 text-futuristic-text-secondary hover:text-futuristic-blue transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-futuristic-blue/10 transition-colors">
                          <Phone size={18} />
                        </div>
                        <span>+961 76 151 957</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 mt-8">Follow Me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-futuristic-blue/10 hover:text-futuristic-blue transition-all"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ralph-rizk02/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-futuristic-blue/10 hover:text-futuristic-blue transition-all"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/ralphxrizk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-futuristic-blue/10 hover:text-futuristic-blue transition-all"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    
                    <div className="mt-8">
                      <p className="text-xl font-medium text-gradient">
                        Let's build something futuristic together!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default Contact;
