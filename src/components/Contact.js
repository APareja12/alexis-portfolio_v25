import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        form.reset();
      })
      .catch(() => {
        setIsSubmitting(false);
        alert(
          'Error sending message. Please email me directly at alexis.pareja@hotmail.com'
        );
      });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-32 scroll-mt-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle size={40} className="text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Thank You! 🎉
              </h2>

              <p className="text-xl text-gray-300 mb-6">
                Your message has been sent successfully! I'll get back to you
                within 24 hours.
              </p>

              <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm">
                  📧 Your message has been delivered to:{' '}
                  <strong>alexis.pareja@hotmail.com</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
                <a href="#projects" className="btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

            {/* Hidden form for Netlify detection */}
            <form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>

            {/* Actual form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto mb-12"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot */}
              <div className="hidden">
                <input name="bot-field" />
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
                href="mailto:alexis.pareja@hotmail.com"
                className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:-translate-y-1 p-3"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Based in New Jersey • Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
