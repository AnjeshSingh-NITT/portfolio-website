import React, { useEffect, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [glitchText, setGlitchText] = useState("Anjesh Singh");
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const position = Math.floor(Math.random() * glitchText.length);
      const newText = glitchText.substring(0, position) + randomChar + glitchText.substring(position + 1);
      setGlitchText(newText);
      
      // Reset after brief delay
      setTimeout(() => setGlitchText("Anjesh Singh"), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-600/10 animate-gradient" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="relative text-center px-4 z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text relative z-10">
              {glitchText}
            </span>
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-50 -z-10" />
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6 glow" />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Software Developer & Competitive Programmer
          </motion.p>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating elegant solutions to complex problems. 
            Specializing in full-stack development and algorithmic problem-solving.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center items-center space-x-6"
        >
          <SocialLink 
            href="https://github.com" 
            icon={<Github className="transition-transform group-hover:rotate-12" />} 
            label="GitHub" 
          />
          <SocialLink 
            href="https://linkedin.com" 
            icon={<Linkedin className="transition-transform group-hover:rotate-12" />} 
            label="LinkedIn" 
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <FileText size={20} className="relative transition-transform group-hover:rotate-12" />
            <span className="relative">Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 text-gray-400 hover:text-blue-400 transition-all duration-300 relative"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      {icon}
    </div>
  </motion.a>
);

export default Hero;