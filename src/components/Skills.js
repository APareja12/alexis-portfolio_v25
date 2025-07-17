import React from 'react';
import { skills } from '../data/projects';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container-custom">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-center text-primary-400 mb-6">
                {category.name}
              </h3>

              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg p-4 text-center transition-all duration-200 hover:from-primary-500/30 hover:to-secondary-500/30 hover:-translate-y-1"
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-400 mb-6">
              Always Learning
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm constantly exploring new technologies and methodologies to
              stay current with industry trends. Currently diving deeper into
              cloud architecture, AI/ML integration, and advanced React
              patterns.
            </p>

            {/* Learning Progress */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  AI Integration
                </h4>
                <p className="text-sm text-gray-400">
                  Exploring OpenAI APIs and machine learning workflows
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">☁️</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Cloud Native</h4>
                <p className="text-sm text-gray-400">
                  AWS, Docker, and serverless architecture patterns
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⚡</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Performance</h4>
                <p className="text-sm text-gray-400">
                  Advanced optimization and monitoring techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
