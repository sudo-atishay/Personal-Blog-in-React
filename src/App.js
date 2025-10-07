import React from 'react';
import './main.css';

function Social({ href, title, children, className = '' }) {
  return (
    <a href={href} className={`social ${className}`} title={title} target={href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer">
      {children}
    </a>
  );
}

function CenterHero() {
  return (
    <section className="hero">
      <div className="glass">
        <div className="photo-wrap">
          <img src="/Atishay Jain Photo.jpg" alt="Atishay Jain" className="hero-photo" />
        </div>
        <h1 className="hero-name">Atishay Jain</h1>
        <p className="hero-title">Software engineer focused on reliable infrastructure, security, and practical tooling.</p>

        <nav className="hero-socials" aria-label="Contact and social links">
          <Social href="mailto:atishay23@gmail.com" title="Email" className="hero-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11zM4.5 6a.5.5 0 00-.5.5V8l8 4.5L20 8V6.5a.5.5 0 00-.5-.5h-15z"/></svg>
            <span>Email</span>
          </Social>
          <Social href="https://github.com/sudo-atishay" title="GitHub" className="hero-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.8 2 1.2.1-.9.4-1.6.7-2-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1a10 10 0 015.5 0c2-.5 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.9 1.1 3.1 0 4.7-2.7 5.6-5.3 5.9.4.4.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z"/></svg>
            <span>GitHub</span>
          </Social>
          <Social href="https://www.linkedin.com/in/atishay23/" title="LinkedIn" className="hero-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.01 0zM3 8.25h3.98V21H3V8.25zM9.24 8.25h3.82v1.70h.05c.53-1 1.84-2.07 3.8-2.07 4.06 0 4.81 2.67 4.81 6.14V21h-3.98v-5.32c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V21H9.24V8.25z"/></svg>
            <span>LinkedIn</span>
          </Social>
        </nav>
      </div>
    </section>
  );
}

/* Blog1 and Blog2 components removed — posts are rendered inline via BlogCard */

export default function App() {
  return (
    <div className="page">
      <main className="container">
        <Header />
        <Home />
        <footer className="site-footer">
          <p className="small">© {new Date().getFullYear()} Atishay Jain</p>
        </footer>
      </main>
    </div>
  );
}
