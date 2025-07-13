// src/App.js - Fixed version that uses Portfolio.css classes

import './Portfolio.css';
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
  Plus,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

// Sample projects data - replace with your real projects
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack React application with Node.js backend, featuring real-time inventory management and secure payment processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT', 'Express'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com/yourusername/ecommerce-platform', // Update with your GitHub
    live: 'https://your-ecommerce-demo.netlify.app', // Update with your live demo
    category: 'Full Stack',
    featured: true,
    status: 'Completed',
    year: '2024',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative productivity tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Firebase', 'Material-UI', 'WebSocket', 'Context API'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://your-taskmanager.netlify.app',
    category: 'Frontend',
    featured: true,
    status: 'In Progress',
    year: '2024',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with location-based forecasts, data visualization, and responsive design.',
    tech: [
      'JavaScript',
      'Chart.js',
      'OpenWeather API',
      'CSS3',
      'Geolocation API',
    ],
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    github: 'https://github.com/yourusername/weather-dashboard',
    live: 'https://your-weather-app.netlify.app',
    category: 'Frontend',
    featured: false,
    status: 'Completed',
    year: '2023',
  },
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

  const skills = [
    {
      name: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'CSS3'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack'] },
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-brand">
            Alexis Pareja {/* Update with your name */}
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
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
              className={`edit-mode-btn ${
                isEditMode ? 'edit-mode-active' : ''
              }`}
            >
              {isEditMode ? 'Exit Edit' : 'Edit Mode'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
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
                className={`mobile-edit-btn ${isEditMode ? 'active' : ''}`}
              >
                {isEditMode ? 'Exit Edit Mode' : 'Edit Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-bg-animation"></div>
        <div className="hero-content">
          <div className="hero-card">
            <h1 className="hero-title">Web Developer</h1>
            <p className="hero-subtitle">
              Crafting digital experiences with modern web technologies
            </p>
            <p className="hero-description">
              {/* Update this with your real bio */}
              Remote developer from Manhattan with experience at Muratek,
              specializing in creating responsive, user-friendly web
              applications with clean, maintainable code.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              {/* Update these links with your real social media links */}
              <a href="https://github.com/yourusername" className="social-link">
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                {/* Update these paragraphs with your real story */}
                <p className="about-paragraph">
                  I'm a passionate web developer with experience working
                  remotely at Muratek, an IT/networking company in Manhattan. I
                  specialize in creating modern, responsive web applications
                  using the latest technologies.
                </p>
                <p className="about-paragraph">
                  My journey in web development has taught me the importance of
                  clean code, user experience, and continuous learning. I enjoy
                  tackling complex problems and turning ideas into functional,
                  beautiful digital experiences.
                </p>
                <div className="skill-badges">
                  <div className="skill-badge skill-badge-blue">
                    <Code size={20} />
                    <span>Clean Code</span>
                  </div>
                  <div className="skill-badge skill-badge-purple">
                    <Palette size={20} />
                    <span>UI/UX Focused</span>
                  </div>
                  <div className="skill-badge skill-badge-pink">
                    <Zap size={20} />
                    <span>Performance</span>
                  </div>
                </div>
              </div>
              <div className="experience-card">
                <div className="experience-content">
                  <h3 className="experience-title">Experience</h3>
                  <div className="experience-item">
                    <h4 className="job-title">Web Developer</h4>
                    <p className="company">Muratek (Remote)</p>
                    <p className="company-desc">
                      IT/Networking Company - Manhattan
                    </p>
                  </div>
                  {/* Add more work experience here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            {isEditMode && (
              <button className="btn btn-add">
                <Plus size={20} />
                Add Project
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'filter-btn-active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card-wrapper">
                <div className="project-card">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-image-overlay"></div>
                    {project.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                    <div className="status-badge">{project.status}</div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-tags">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="project-link project-link-live"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Edit Mode Controls */}
                {isEditMode && (
                  <div className="edit-controls">
                    <button
                      onClick={() => toggleFeatured(project.id)}
                      className={`edit-btn ${
                        project.featured
                          ? 'edit-btn-featured'
                          : 'edit-btn-default'
                      }`}
                    >
                      <Eye size={16} />
                    </button>
                    <button className="edit-btn edit-btn-edit">
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="edit-btn edit-btn-delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.name}</h3>
                <div className="skills-list">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-card">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-description">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>
            <div className="contact-buttons">
              {/* Update with your real email */}
              <a
                href="mailto:your.email@example.com"
                className="btn btn-primary"
              >
                Email Me
              </a>
              {/* Update with your real LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-social">
              <a href="https://github.com/yourusername" className="social-link">
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="social-link"
              >
                <Linkedin size={32} />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Alexis Pareja. All rights reserved.</p>{' '}
          {/* Update with your name */}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
