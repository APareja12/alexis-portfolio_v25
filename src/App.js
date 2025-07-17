// src/App.js - With Tailwind
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projectsData } from './data/projects';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projects, setProjects] = useState(projectsData);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const toggleFeatured = (id) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  return (
    <div className="min-h-screen bg-portfolio-pattern text-white overflow-x-hidden">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects
          projects={projects}
          isEditMode={isEditMode}
          handleDeleteProject={handleDeleteProject}
          toggleFeatured={toggleFeatured}
        />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
