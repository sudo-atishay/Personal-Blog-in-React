import React, { useEffect, useState } from 'react';
import './main.css';

function Social({ href, title, children, className = '' }) {
  return (
    <a href={href} className={`social ${className}`} title={title} target={href.startsWith('mailto:') || href.startsWith('#') ? '_self' : '_blank'} rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="photo">
        <img src="/Atishay Jain Photo.jpg" alt="Atishay Jain" />
      </div>
      <div className="identity">
        <h1 className="name">Atishay Jain</h1>
        <p className="title">Software engineer focused on reliable infrastructure, security, and practical tooling.</p>
        <nav className="socials" aria-label="Contact and social links">
          <Social href="mailto:atishay23@gmail.com" title="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11zM4.5 6a.5.5 0 00-.5.5V8l8 4.5L20 8V6.5a.5.5 0 00-.5-.5h-15z"/></svg>
            <span className="label">Email</span>
          </Social>
          <Social href="https://github.com/sudo-atishay" title="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.8 2 1.2.1-.9.4-1.6.7-2-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1a10 10 0 015.5 0c2-.5 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.9 1.1 3.1 0 4.7-2.7 5.6-5.3 5.9.4.4.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z"/></svg>
            <span className="label">GitHub</span>
          </Social>
          <Social href="https://www.linkedin.com/in/atishay23/" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.01 0zM3 8.25h3.98V21H3V8.25zM9.24 8.25h3.82v1.70h.05c.53-1 1.84-2.07 3.8-2.07 4.06 0 4.81 2.67 4.81 6.14V21h-3.98v-5.32c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V21H9.24V8.25z"/></svg>
            <span className="label">LinkedIn</span>
          </Social>
          <Social href="/resume.pdf" title="Resume" className="resume">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 3.5L18.5 9H13V3.5zM8 12h8v1H8v-1zm0 3h8v1H8v-1zM8 7h3v1H8V7z"/></svg>
            <span className="label">Resume</span>
          </Social>
        </nav>
      </div>
    </header>
  );
}

function Home({ navigate }) {
  return (
    <div>
      <section className="bio">
        <p>
          I'm a software engineer who enjoys building dependable systems and improving how teams operate in production. My focus areas include cloud infrastructure, Linux, security, and automation. I like turning complex problems into small, testable pieces and iterating toward robust solutions.
        </p>
      </section>

      <section className="projects">
        <h2>Selected Projects</h2>
        <ul>
          <li><strong>AI-Memory-Assistant</strong> — An AI-powered personal memory assistant built with the MERN stack and SQLite, designed to help users store, organize, and analyze their notes and ideas. It features smart categorization, advanced search, priority ratings, and an analytics dashboard with future-ready AI integration.).</li>
          <li><strong>Solar Step</strong> — A full-stack MERN application that streamlines the entire solar panel installation workflow—from sales initiation and contract management to scheduling, compliance, and final reporting. It provides an intuitive dashboard and collaboration tools to ensure efficiency and transparency for all stakeholders.</li>
        </ul>
      </section>

      <section className="posts">
        <h2>Recent Writing</h2>
        <ul>
          <li><a href="#/blog1" onClick={(e)=>{e.preventDefault(); navigate('#/blog1')}}>On designing resilient rollouts</a> — Apr 2025</li>
          <li><a href="#/blog2" onClick={(e)=>{e.preventDefault(); navigate('#/blog2')}}>A short guide to service hardening</a> — Dec 2024</li>
        </ul>
      </section>
    </div>
  );
}

function Blog1({ navigate }) {
  return (
    <main className="post">
      <div className="post-header">
        <a href="#/" onClick={(e)=>{e.preventDefault(); navigate('#/')}} style={{color:'var(--accent)', textDecoration:'none'}}>← Back</a>
        <h1 className="post-title">On designing resilient rollouts</h1>
        <div className="post-meta">Apr 2025 — Thoughts on gradual rollouts, canarying, and measuring risk.</div>
      </div>
      <article className="post-body">
        <p>Draft content goes here. This is a local blog file you can edit directly in the React app source (or embed content here). Add sections, code samples, or images as needed.</p>
        <h3>Principles</h3>
        <p>Start small; make changes observable; be ready to rollback quickly. Ensure experiments are reversible and measure both user-visible signals and internal health metrics.</p>
      </article>
    </main>
  );
}

function Blog2({ navigate }) {
  return (
    <main className="post">
      <div className="post-header">
        <a href="#/" onClick={(e)=>{e.preventDefault(); navigate('#/')}} style={{color:'var(--accent)', textDecoration:'none'}}>← Back</a>
        <h1 className="post-title">A short guide to service hardening</h1>
        <div className="post-meta">Dec 2024 — Practical steps to reduce attack surface and improve resilience.</div>
      </div>
      <article className="post-body">
        <p>Draft content goes here. Edit this component to expand the guide — include commands, links, and examples.</p>
        <h3>Checklist</h3>
        <ul>
          <li>Minimize network exposure</li>
          <li>Use least privilege across services</li>
          <li>Automate dependency updates and vulnerability scanning</li>
        </ul>
      </article>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    function onHash() {
      setRoute(window.location.hash || '#/');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (hash) => {
    window.location.hash = hash;
    setRoute(hash);
  };

  let content = null;
  if (route === '#/' || route === '' ) content = <Home navigate={navigate} />;
  else if (route === '#/blog1') content = <Blog1 navigate={navigate} />;
  else if (route === '#/blog2') content = <Blog2 navigate={navigate} />;
  else content = <Home navigate={navigate} />;

  return (
    <div className="page">
      <main className="container">
        <Header />
        {content}
        <footer className="site-footer">
          <p className="small">© {new Date().getFullYear()} Atishay Jain — <a href="/resume.pdf">Resume</a></p>
        </footer>
      </main>
    </div>
  );
}
