import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <nav className="navbar">
        <Link href="/" legacyBehavior>
          <a className="back-button" aria-label="Back to Home">&larr; Back</a>
        </Link>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} legacyBehavior>
                <a className={`menu-link ${item.name === 'Contact' ? 'active' : ''}`}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="contact-content">
        <h1 className="page-title">Get in Touch</h1>
        <p className="contact-intro">
          Have a question or want to work together? Feel free to reach out!
        </p>

        {submitStatus ? (
          <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
            {submitStatus.message}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
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

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="form-input"
              placeholder="Hi there! I'd love to chat about..."
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </main>


      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Fira Mono', monospace;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding: 10px 0;
          margin-bottom: 30px;
          background-color: var(--nav-bg);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }
        
        .back-button {
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        
        .back-button:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .menu {
          list-style: none;
          display: flex;
          gap: 25px;
          margin: 0;
          padding: 0;
          font-size: 14px;
        }
        
        .menu li {
          margin: 0;
          padding: 0;
        }
        
        .menu a {
          text-decoration: none;
          color: var(--text-primary) !important;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: block;
        }
        
        .menu a:hover {
          color: var(--text-primary) !important;
          background-color: var(--hover-bg);
          text-decoration: none;
        }
        
        .menu a.active {
          color: var(--text-primary) !important;
          font-weight: 600;
          text-decoration: underline;
        }
        
        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }
        
        .page-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        
        .contact-intro {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .form-input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background-color: var(--card-bg);
          color: var(--text-primary);
          font-family: 'Fira Mono', monospace;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color:rgb(255, 255, 255);
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }
        
        textarea.form-input {
          min-height: 150px;
          resize: vertical;
        }
        
        .submit-button {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          border: none;
          border-radius: 6px;
          padding: 0.75rem 1.5rem;
          font-family: 'Fira Mono', monospace;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
          align-self: flex-start;
          margin-top: 1rem;
        }
        
        .submit-button:hover:not(:disabled) {
          background-color: var(--bg-secondary);
        }
        
        .submit-button:active:not(:disabled) {
          transform: translateY(1px);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .form-status {
          padding: 1rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .form-status.success {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .form-status.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        @media (max-width: 768px) {
          .contact-content {
            padding: 0 10px;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .contact-intro {
            font-size: 1rem;
          }
          
          .menu {
            gap: 15px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}