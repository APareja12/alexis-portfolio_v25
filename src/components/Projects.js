// src/components/Projects.js - With Tailwind
import React, { useState } from 'react';
import { Github, ExternalLink, Plus, Code, Palette } from 'lucide-react';
import { cmsProjectsData, categories } from '../data/projects';

const Projects = ({
  projects,
  isEditMode,
  handleDeleteProject,
  toggleFeatured,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('development');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="section-title mb-6 md:mb-0">My Work</h2>
          {isEditMode && (
            <button className="btn-primary flex items-center space-x-2">
              <Plus size={20} />
              <span>Add Project</span>
            </button>
          )}
        </div>

        {/* Project Type Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 border-b border-glass-border">
          <button
            onClick={() => setActiveTab('development')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'development'
                ? 'text-primary-400 border-primary-400'
                : 'text-gray-400 border-transparent hover:text-primary-400'
            }`}
          >
            <Code size={20} />
            <span>Development Projects</span>
          </button>
          <button
            onClick={() => setActiveTab('cms')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'cms'
                ? 'text-primary-400 border-primary-400'
                : 'text-gray-400 border-transparent hover:text-primary-400'
            }`}
          >
            <Palette size={20} />
            <span>WordPress & Web Platforms</span>
          </button>
        </div>

        {/* Development Projects Tab */}
        {activeTab === 'development' && (
          <div className="space-y-12">
            {/* Tab Description */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-secondary-400 mb-4">
                Custom Development & Programming
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Full-stack applications, React components, and custom web
                solutions built from scratch.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group">
                  <div className="project-card">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 bg-primary-500/20 backdrop-blur-sm text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
                        {project.status}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-secondary-400 transition-colors duration-200"
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
        )}

        {/* CMS Projects Tab */}
        {activeTab === 'cms' && (
          <div className="space-y-12">
            {/* Tab Description */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-secondary-400 mb-4">
                Content Management Systems
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Professional websites built with WordPress and Wix, featuring
                custom designs and business solutions.
              </p>
            </div>

            {/* CMS Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cmsProjectsData.map((project) => (
                <div key={project.id} className="group">
                  <div className="project-card">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Platform Badge */}
                      <div
                        className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-semibold text-sm uppercase tracking-wide ${
                          project.platform === 'WordPress'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`}
                      >
                        {project.platform}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>

                      {project.client && (
                        <p className="text-secondary-400 text-sm mb-3 italic">
                          Client: {project.client}
                        </p>
                      )}

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-primary-400 font-semibold mb-2 text-sm">
                          Key Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <span
                              key={index}
                              className="bg-secondary-500/20 text-secondary-400 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Meta */}
                      <div className="flex justify-between items-center text-sm border-t border-glass-border pt-4 mb-4">
                        <span className="text-gray-300 font-medium">
                          {project.year}
                        </span>
                        <span className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded font-medium">
                          {project.category}
                        </span>
                        <span className="text-green-400 font-medium">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Link */}
                      <div className="mt-auto">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">View Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
