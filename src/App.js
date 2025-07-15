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

// Development projects data
const projectsData = [
  {
    id: 1,
    title: 'Golden Silence - Silent Films Database',
    description:
      'A comprehensive database showcasing the art and history of silent cinema with elegant vintage-inspired design, advanced search functionality, and film categorization.',
    tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design', 'Film Database'],
    image: '/images/projects/golden-silence.jpg',
    github: 'https://github.com/APareja12/golden-silence',
    live: 'https://g-silence.netlify.app',
    category: 'Frontend',
    featured: true,
    status: 'Completed',
    year: '2024',
  },
  {
    id: 2,
    title: 'Checkpoint Productions',
    description:
      'Clean, responsive portfolio website built with core web technologies including HTML5, CSS3, and JavaScript. Features semantic markup structure, custom styling for professional presentation, and interactive JavaScript functionality for enhanced user experience.',
    tech: ['CSS', 'HTML', 'Javascript'],
    image: '/images/projects/checkpointproductions.jpg',
    github: 'https://github.com/APareja12/checkpointpro',
    live: 'https://checkpointproductions.com',
    category: 'Frontend',
    featured: true,
    status: 'Completed',
    year: '2022',
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

// WordPress/Wix projects data
const cmsProjectsData = [
  {
    id: 1,
    title: 'Town of Sidney',
    description:
      'Professional WordPress website for a local government with custom theme, board meetings calendar, tax payment portal, SEO optimization, and contact forms.',
    platform: 'WordPress',
    features: [
      'Custom Theme',
      'SEO Optimization',
      'Contact Forms',
      'Mobile Responsive',
    ],
    image: 'images/projects/townofsidney.jpg',
    live: 'https://townofsidneyny.gov',
    category: 'Government',
    client: 'Local Government',
    status: 'Completed',
    year: '2023',
  },
  {
    id: 2,
    title: 'Artist Website',
    description:
      'Creative artist website built with Wix featuring custom animations, gallery showcases, and blog.',
    platform: 'Wix',
    features: [
      'Custom Animations',
      'Gallery Integration',
      'Testimonials',
      'Booking System',
    ],
    image: 'images/projects/alexispareja.jpg',
    live: 'https://www.alexispareja.com',
    category: 'Portfolio',
    client: 'Creative Professional',
    status: 'Completed',
    year: '2020',
  },
  {
    id: 3,
    title: 'This Bee Lana',
    description:
      'Online store built with WordPress and WooCommerce, featuring product catalogs, event calendar, and contact form.',
    platform: 'WordPress',
    features: [
      'WooCommerce',
      'Payment Gateway',
      'Inventory System',
      'Product Reviews',
    ],
    image: 'images/projects/thisbeelana.jpg',
    live: 'https://thisbeelana.com',
    category: 'E-commerce',
    client: 'Retail Business',
    status: 'Completed',
    year: '2022',
  },
  {
    id: 4,
    title: 'We Are All Related',
    description:
      'A non-profit organization holding events for the International Council of Thirteen Indigenous Grandmothers.',
    platform: 'WordPress',
    features: ['Contact Form', 'Event Tickets'],
    image: 'images/projects/weareallrelated.jpg',
    live: 'https://www.weareallrelated.earth',
    category: 'E-commerce',
    client: 'Non-profit',
    status: 'Completed',
    year: '2024',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projects, setProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('development');

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
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #7c3aed, #0f172a)',
        color: 'white',
        overflowX: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 50,
          transition: 'all 0.3s ease',
          padding: '1rem 0',
          background: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Alexis Pareja
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                background: isEditMode
                  ? 'rgba(239, 68, 68, 0.2)'
                  : 'rgba(34, 197, 94, 0.2)',
                color: isEditMode ? '#f87171' : '#4ade80',
              }}
            >
              {isEditMode ? 'Exit Edit' : 'Edit Mode'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        ></div>
        <div
          style={{
            maxWidth: '64rem',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '2rem',
              padding: '4rem 3rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h1
              style={{
                fontSize: '4rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Web Developer
            </h1>
            <p
              style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: '#d1d5db',
              }}
            >
              Crafting digital experiences with modern web technologies
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                color: '#9ca3af',
                maxWidth: '48rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.7,
              }}
            >
              Remote developer from New Jersey with experience at Muratek,
              specializing in creating responsive, user-friendly web
              applications with clean, maintainable code.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                style={{
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '1rem',
                }}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  background: 'transparent',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Get In Touch
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
              }}
            >
              <a
                href="https://github.com/APareja12"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-pareja-b964b36b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:alexis.pareja@hotmail.com"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#9ca3af',
          }}
        >
          <ChevronDown size={32} />
        </div>
      </section>
      {/* About Section */}
      <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '3rem',
                textAlign: 'center',
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    marginBottom: '1.5rem',
                    color: '#d1d5db',
                    lineHeight: 1.7,
                  }}
                >
                  I'm a passionate full stack engineer with experience working
                  remotely at Muratek, an IT/networking company in Manhattan and
                  freelancing. I specialize in creating modern, responsive web
                  applications using the latest technologies.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    marginBottom: '1.5rem',
                    color: '#d1d5db',
                    lineHeight: 1.7,
                  }}
                >
                  My journey in web development has taught me the importance of
                  clean code, user experience, and continuous learning. I enjoy
                  tackling complex problems and turning ideas into functional,
                  beautiful digital experiences.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#60a5fa',
                    }}
                  >
                    <Code size={20} />
                    <span>Clean Code</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(147, 51, 234, 0.2)',
                      color: '#a78bfa',
                    }}
                  >
                    <Palette size={20} />
                    <span>UI/UX Focused</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(236, 72, 153, 0.2)',
                      color: '#f472b6',
                    }}
                  >
                    <Zap size={20} />
                    <span>Performance</span>
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    background:
                      'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                    borderRadius: '1rem',
                    padding: '1px',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(17, 24, 39, 0.5)',
                      borderRadius: '1rem',
                      padding: '2rem',
                      textAlign: 'center',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#60a5fa',
                        marginBottom: '1rem',
                      }}
                    >
                      Experience
                    </h3>
                    <div
                      style={{
                        borderLeft: '4px solid #60a5fa',
                        paddingLeft: '1rem',
                        textAlign: 'left',
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: 600,
                          fontSize: '1.125rem',
                          color: 'white',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Web Developer
                      </h4>
                      <p
                        style={{
                          color: '#9ca3af',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Muratek (Remote)
                      </p>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#6b7280',
                        }}
                      >
                        IT/Networking Company - Manhattan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 0' }}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Work
            </h2>
            {isEditMode && (
              <button
                style={{
                  background: 'linear-gradient(45deg, #16a34a, #2563eb)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Plus size={20} />
                Add Project
              </button>
            )}
          </div>

          {/* Project Type Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <button
              onClick={() => setActiveTab('development')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'transparent',
                border: 'none',
                color: activeTab === 'development' ? '#60a5fa' : '#d1d5db',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                borderBottom:
                  activeTab === 'development'
                    ? '3px solid #60a5fa'
                    : '3px solid transparent',
                marginBottom: '-2px',
              }}
            >
              <Code size={20} />
              Development Projects
            </button>
            <button
              onClick={() => setActiveTab('cms')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'transparent',
                border: 'none',
                color: activeTab === 'cms' ? '#60a5fa' : '#d1d5db',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                borderBottom:
                  activeTab === 'cms'
                    ? '3px solid #60a5fa'
                    : '3px solid transparent',
                marginBottom: '-2px',
              }}
            >
              <Palette size={20} />
              WordPress & Web Creation Platforms
            </button>
          </div>

          {/* Development Projects Tab */}
          {activeTab === 'development' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: '#a78bfa',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Custom Development & Programming
                </h3>
                <p
                  style={{
                    color: '#d1d5db',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6,
                  }}
                >
                  Full-stack applications, React components, and custom web
                  solutions built from scratch.
                </p>
              </div>

              {/* Category Filter for Development */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderRadius: '9999px',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      background:
                        selectedCategory === category
                          ? 'linear-gradient(45deg, #2563eb, #7c3aed)'
                          : 'rgba(255, 255, 255, 0.1)',
                      color:
                        selectedCategory === category ? 'white' : '#d1d5db',
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '2rem',
                }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.id} style={{ position: 'relative' }}>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '12rem',
                            objectFit: 'cover',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                          }}
                        ></div>
                        {project.featured && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '1rem',
                              left: '1rem',
                              background:
                                'linear-gradient(45deg, #fbbf24, #f59e0b)',
                              color: 'black',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                            }}
                          >
                            Featured
                          </div>
                        )}
                        <div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'rgba(59, 130, 246, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#60a5fa',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        >
                          {project.status}
                        </div>
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'white',
                            marginBottom: '0.75rem',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            color: '#d1d5db',
                            marginBottom: '1rem',
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                          }}
                        >
                          {project.description}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            marginBottom: '1rem',
                          }}
                        >
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              style={{
                                background: 'rgba(59, 130, 246, 0.2)',
                                color: '#60a5fa',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              color: '#9ca3af',
                              textDecoration: 'none',
                              fontSize: '0.875rem',
                            }}
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              color: '#9ca3af',
                              textDecoration: 'none',
                              fontSize: '0.875rem',
                            }}
                          >
                            <ExternalLink size={16} />
                            <span>Live</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CMS Projects Tab */}
          {activeTab === 'cms' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: '#a78bfa',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Content Management Systems
                </h3>
                <p
                  style={{
                    color: '#d1d5db',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6,
                  }}
                >
                  Professional websites built with WordPress and Wix, featuring
                  custom designs and business solutions.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '2rem',
                }}
              >
                {cmsProjectsData.map((project) => (
                  <div
                    key={project.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '12rem',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                        }}
                      ></div>
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          background:
                            project.platform === 'WordPress'
                              ? 'linear-gradient(45deg, #21759b, #0073aa)'
                              : 'linear-gradient(45deg, #0c6efd, #3399ff)',
                          color: 'white',
                        }}
                      >
                        {project.platform}
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'white',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {project.title}
                      </h3>
                      {project.client && (
                        <p
                          style={{
                            color: '#a78bfa',
                            fontSize: '0.9rem',
                            marginBottom: '0.5rem',
                            fontStyle: 'italic',
                          }}
                        >
                          Client: {project.client}
                        </p>
                      )}
                      <p
                        style={{
                          color: '#d1d5db',
                          marginBottom: '1rem',
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </p>
                      <div style={{ margin: '1rem 0' }}>
                        <h4
                          style={{
                            color: '#60a5fa',
                            fontSize: '0.95rem',
                            marginBottom: '0.5rem',
                            fontWeight: 600,
                          }}
                        >
                          Key Features:
                        </h4>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                          }}
                        >
                          {project.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              style={{
                                background: 'rgba(147, 51, 234, 0.2)',
                                color: '#a78bfa',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          margin: '1rem 0',
                          paddingTop: '1rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.875rem',
                        }}
                      >
                        <span
                          style={{
                            color: '#d1d5db',
                            fontWeight: 500,
                          }}
                        >
                          {project.year}
                        </span>
                        <span
                          style={{
                            background: 'rgba(59, 130, 246, 0.2)',
                            color: '#60a5fa',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.375rem',
                            fontWeight: 500,
                          }}
                        >
                          {project.category}
                        </span>
                        <span
                          style={{
                            color: '#4ade80',
                            fontWeight: 500,
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#9ca3af',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                          }}
                        >
                          <ExternalLink size={16} />
                          <span>View Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" style={{ padding: '5rem 0' }}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {skills.map((category, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    color: '#60a5fa',
                    marginBottom: '1rem',
                  }}
                >
                  {category.name}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{
                        background:
                          'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <span
                        style={{
                          color: 'white',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's Work Together
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                marginBottom: '2rem',
                color: '#d1d5db',
              }}
            >
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>

            {/* Contact Form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                maxWidth: '600px',
                margin: '0 auto 2rem',
              }}
            >
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem',
                }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical',
                }}
              ></textarea>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Send Message
              </button>
            </form>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <a
                href="mailto:alexis.pareja@hotmail.com"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  background: 'transparent',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                Direct Email
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  background: 'transparent',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                LinkedIn
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
              }}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:alexis.pareja@hotmail.com"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        style={{
          padding: '2rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            color: '#9ca3af',
          }}
        >
          <p>&copy; 2025 Alexis Pareja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
