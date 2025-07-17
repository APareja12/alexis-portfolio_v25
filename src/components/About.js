import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="glass-card p-8 md:p-12">
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full stack engineer with experience working
                remotely at Muratek, an IT/networking company in Manhattan and
                freelancing. I specialize in creating modern, responsive web
                applications using the latest technologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development has taught me the importance of
                clean code, user experience, and continuous learning. I enjoy
                tackling complex problems and turning ideas into functional,
                beautiful digital experiences.
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full">
                  <Code size={20} />
                  <span className="font-medium">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary-500/20 text-secondary-400 px-4 py-2 rounded-full">
                  <Palette size={20} />
                  <span className="font-medium">UI/UX Focused</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent-500/20 text-accent-400 px-4 py-2 rounded-full">
                  <Zap size={20} />
                  <span className="font-medium">Performance</span>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl p-0.5">
                <div className="bg-slate-900/50 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-400 mb-6">
                    Experience
                  </h3>

                  <div className="border-l-4 border-primary-400 pl-6 text-left space-y-2">
                    <h4 className="text-xl font-semibold text-white">
                      Full Stack Engineer
                    </h4>
                    <p className="text-gray-300 font-medium">
                      Muratek (Remote)
                    </p>
                    <p className="text-sm text-gray-400">
                      IT/Networking Company - Manhattan
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-400">
                          3+
                        </div>
                        <div className="text-sm text-gray-400">
                          Years Experience
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary-400">
                          15+
                        </div>
                        <div className="text-sm text-gray-400">
                          Projects Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
