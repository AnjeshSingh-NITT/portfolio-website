import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none" />
      
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12" />
        
        <div className="max-w-2xl mx-auto text-center px-4">
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="flex justify-center space-x-8">
            <SocialLink
              href="https://github.com/AnjeshSingh-NITT"
              icon={<Github size={28} />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/anjeshsingh-nitt/"
              icon={<Linkedin size={28} />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:singhanjesh@gmail.com"
              icon={<Mail size={28} />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 rounded-full"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;