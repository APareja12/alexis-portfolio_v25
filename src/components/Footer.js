import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-glass-border bg-glass-dark/50 backdrop-blur-sm">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>&copy; {new Date().getFullYear()} Alexis Pareja.</span>
            <span>All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and</span>
            <Code2 size={16} className="text-primary-400" />
            <span>in New Jersey</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm">
            <a
              href="#about"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-glass-border/50 text-center">
          <p className="text-sm text-gray-500">
            Built with React, Tailwind CSS, and deployed on Netlify
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
