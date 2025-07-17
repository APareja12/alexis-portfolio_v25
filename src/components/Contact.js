// src/components/Contact.js - COMPLETELY FRESH VERSION
import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="section-title mb-8">Let's Work Together</h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              className="space-y-6 max-w-2xl mx-auto mb-12"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-left text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-left text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center space-x-2 mx-auto"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/APareja12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-3"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-pareja-b964b36b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-3"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:alexis.pareja@hotmail.com"
                className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-3"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Based in Manhattan, New York • Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
