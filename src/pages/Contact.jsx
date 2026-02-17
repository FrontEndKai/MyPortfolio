import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, FormSpree)
    console.log('Form submitted:', formData);z
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-shell contact-page">
      <div className="contact-header">
        <span className="section-label">Get In Touch</span>
        <h1 className="section-title">Contact Me</h1>
        <p className="contact-intro">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <Mail size={28} />
            </div>
            <h3>Email</h3>
            <p>frontend.kaisu@gmail.com</p>
            <a href="mailto:your.email@example.com" className="contact-link">Send a message →</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Linkedin size={28} />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">Visit profile →</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Github size={28} />
            </div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <a href="https://github.com/FrontEndKai/MyPortfolio" target="_blank" rel="noopener noreferrer" className="contact-link">View projects →</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2 className="form-title">Or send me a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me more about your project..."
              />
            </div>

            <button type="submit" className="btn-submit">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
