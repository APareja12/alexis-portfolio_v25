{
  /* Static Contact Form - No JavaScript needed */
}
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/thank-you.html"
  className="space-y-6 max-w-2xl mx-auto mb-12"
>
  {/* Hidden fields for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
  <div className="hidden">
    <label>
      Don't fill this out if you're human: <input name="bot-field" />
    </label>
  </div>

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
      required
      rows={6}
      className="form-input resize-none"
      placeholder="Tell me about your project or just say hello!"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="btn-primary w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center space-x-2 mx-auto"
  >
    <Send size={20} />
    <span>Send Message</span>
  </button>
</form>;
