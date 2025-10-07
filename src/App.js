import React, { useState } from 'react';
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
        <p className="title">Software | Linux | AI | Infrastructure Security</p>
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

function BlogCard({ post, expanded, onToggle }) {
  return (
    <article className={`blog-card ${expanded ? 'expanded' : ''}`}>
      <div className="card-head">
        <h3 className="card-title">{post.title}</h3>
        <div className="card-meta">{post.date}</div>
      </div>
      <p className="card-excerpt">{post.excerpt}</p>
      <div className="card-controls">
        <button className="read-btn" onClick={() => onToggle(post.id)}>{expanded ? 'Show less' : 'Read'} </button>
      </div>
      {expanded && (
        <div className="card-body">
          {post.content.map((node, i) => (
            <div key={i} className="card-block">{node}</div>
          ))}
        </div>
      )}
    </article>
  );
}

function Home() {
  const [expandedId, setExpandedId] = useState(null);

  const posts = [
    {
      id: 'blog1',
      title: 'On designing resilient rollouts',
      date: 'Apr 2025',
      excerpt: 'Thoughts on gradual rollouts, canarying, and measuring risk — start small, measure early, and be ready to rollback.',
      content: [
        <p>Draft content goes here. This is a local blog you can edit in the React app. Add sections, code samples, or images as needed.</p>,
        <h4>Principles</h4>,
        <p>Start small; make changes observable; be ready to rollback quickly. Ensure experiments are reversible and measure both user-visible signals and internal health metrics.</p>,
      ],
    },
    {
      id: 'blog2',
      title: 'A short guide to service hardening',
      date: 'Dec 2024',
      excerpt: 'Practical steps to reduce attack surface and improve resilience — a short checklist to get started.',
      content: [
        <p>Draft content goes here. Edit this in the app to expand the guide with commands, examples, and references.</p>,
        <h4>Checklist</h4>,
        <ul>
          <li>Minimize network exposure</li>
          <li>Use least privilege across services</li>
          <li>Automate dependency updates and vulnerability scanning</li>
        </ul>,
      ],
    },
  ];

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div>
      <section className="bio">
        <p>
          Tech professional passionate about AI and Infrastructure Security — writing about Tech, AI, and Linux for fun.
        </p>
      </section>

      <section className="projects">
        <h2>Selected Projects</h2>
        <ul>
          <li><strong>AI-Memory-Assistant</strong> — An AI-powered personal memory assistant built with the MERN stack and SQLite, designed to help users store, organize, and analyze their notes and ideas. It features smart categorization, advanced search, priority ratings, and an analytics dashboard with future-ready AI integration.</li>
          <li><strong>Solar Step</strong> — A full-stack MERN application that streamlines the entire solar panel installation workflow—from sales initiation and contract management to scheduling, compliance, and final reporting.</li>
        </ul>
      </section>

      <section className="posts">
        <h2>Recent Writing</h2>
        <div className="posts-grid">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} expanded={expandedId === p.id} onToggle={toggle} />
          ))}
        </div>
      </section>
    </div>
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
          <p className="small">© {new Date().getFullYear()} Atishay Jain — <a href="/resume.pdf">Resume</a></p>
        </footer>
      </main>
    </div>
  );
}
