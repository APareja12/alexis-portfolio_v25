import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  isEditMode,
  setIsEditMode,
}) => {
  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          isScrolled ? 'glass-navbar' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-gradient">
              Alexis Pareja
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isEditMode
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                }`}
              >
                {isEditMode ? 'Exit Edit' : 'Edit Mode'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="mobile-nav-link"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`mobile-nav-link ${
              isEditMode
                ? 'bg-red-500/20 text-red-400'
                : 'bg-green-500/20 text-green-400'
            }`}
          >
            {isEditMode ? 'Exit Edit' : 'Edit Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
