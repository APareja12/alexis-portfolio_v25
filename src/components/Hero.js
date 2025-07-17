import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full animate-glow" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-slate-900/80 rounded-full flex items-center justify-center">
                <img
                  src="https://i.imgur.com/a66hSLl.jpeg"
                  alt="Alexis Pareja"
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in leading-tight pb-2">
            Full Stack Engineer
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Crafting digital experiences with modern web technologies
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            Remote developer from Manhattan with experience at Muratek,
            specializing in creating responsive, user-friendly web applications
            with clean, maintainable code.
          </p>

          {/* CTA Button */}
          <div className="mb-8 animate-fade-in animation-delay-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-8 py-4"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-300">
            <a
              href="https://github.com/APareja12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-2"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-pareja-b964b36b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-2"
            >
              <Linkedin size={24} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-2"
            >
              <Mail size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce-slow">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
