import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-blue-400 font-bold text-xl">AS</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;