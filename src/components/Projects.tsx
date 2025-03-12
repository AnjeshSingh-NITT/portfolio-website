import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project and its key features.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Project 2",
    description: "Another amazing project with its own unique characteristics.",
    tech: ["TypeScript", "Next.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 pointer-events-none" />
      
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Projects & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 border border-gray-700/50"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-1.5 bg-gray-700/50 text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group/link"
                >
                  <Github size={20} className="transition-transform group-hover/link:rotate-12" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group/link"
                >
                  <ExternalLink size={20} className="transition-transform group-hover/link:rotate-12" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;