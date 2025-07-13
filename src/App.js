// src/App.js - Replace your entire App.js file with this content

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Code,
  Palette,
  Zap,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

// Import your projects data (you'll create this file next)
// import { getProjects, getFeaturedProjects, categories } from './data/projects';

// For now, we'll include the data directly in this file
// Later, you can move this to src/data/projects.js
const projectsData = [
  {
    id: 1,
    title: 'Your First Project', // Update this with your real project
    description:
      'Description of your first project. Replace this with your actual project description.',
    tech: ['React', 'CSS', 'JavaScript'], // Update with technologies you used
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', // Replace with your project image
    github: 'https://github.com/yourusername/project1', // Your actual GitHub link
    live: 'https://your-project1.netlify.app', // Your actual live demo link
    category: 'Frontend',
    featured: true,
    status: 'Completed',
    year: '2024',
  },
  // Add more of your real projects here...
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projects, setProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-md border-b border-white/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alexis Pareja {/* Update with your name */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-200 font-medium"
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
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-2 space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Crafting digital experiences with modern web technologies
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              {/* Update this with your real bio */}
              Remote developer from Manhattan with experience at Muratek,
              specializing in creating responsive, user-friendly web
              applications with clean, maintainable code.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              {/* Update these links with your real social media links */}
              <a
                href="https://github.com/yourusername"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Update these paragraphs with your real story */}
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  I'm a passionate web developer with experience working
                  remotely at Muratek, an IT/networking company in Manhattan. I
                  specialize in creating modern, responsive web applications
                  using the latest technologies.
                </p>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  My journey in web development has taught me the importance of
                  clean code, user experience, and continuous learning. I enjoy
                  tackling complex problems and turning ideas into functional,
                  beautiful digital experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                    <Code size={20} className="text-blue-400" />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                    <Palette size={20} className="text-purple-400" />
                    <span>UI/UX Focused</span>
                  </div>
                  <div className="flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full">
                    <Zap size={20} className="text-pink-400" />
                    <span>Performance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-1">
                  <div className="bg-gray-900/50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-lg">Web Developer</h4>
                        <p className="text-gray-400">Muratek (Remote)</p>
                        <p className="text-sm text-gray-500">
                          IT/Networking Company - Manhattan
                        </p>
                      </div>
                      {/* Add more work experience here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-black text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-blue-400 text-xs font-medium">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 text-center hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200"
                    >
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              {/* Update with your real email */}
              <a
                href="mailto:your.email@example.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Email Me
              </a>
              {/* Update with your real LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Alexis Pareja. All rights reserved.</p>{' '}
          {/* Update with your name */}
        </div>
      </footer>
    </div>
  );
};

// This is the key part - we export Portfolio as the default export
// This replaces the default App component
export default Portfolio;
