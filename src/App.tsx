import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anjesh Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;