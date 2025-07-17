import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            {/* Section Title */}
            <h2 className="section-title mb-8">Let's Work Together</h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>

            {/* Hidden form for Netlify */}
            <form name="contact" data-netlify="true" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto mb-12"
            >
              {/* Name and Email Row */}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center space-x-2 mx-auto ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>

            {/* Social Links */}
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
                href="mailto:contact@alexispareja.dev"
                className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-3"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>

            {/* Additional Contact Info */}
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
