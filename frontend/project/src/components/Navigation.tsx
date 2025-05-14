import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Download, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    window.open('https://example.com/path-to-your-cv.pdf', '_blank');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <Terminal className="text-blue-400 h-8 w-8" />
            <span className="text-xl font-bold">DevPortfolio</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-400' : 'text-gray-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <Download size={16} />
              CV
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-3 space-y-3">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-400' : 'text-gray-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors w-full justify-center mt-4"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}