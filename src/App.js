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
      id: 'small-lms',
      title: 'Why Small Language Models Could Be the Future of AI',
      date: 'Aug 2025',
      excerpt: 'Small, efficient models that run locally — faster, cheaper, and private. A practical case for SLMs in real-world apps.',
      content: [
        <p>When people talk about AI today, large language models (LLMs) like GPT-4 or Claude often steal the spotlight. They’re powerful, capable of writing essays, coding, summarizing content, and even generating images. But behind the hype, there’s a growing trend that many experts believe could shape the future of AI: small language models (SLMs).</p>,
        <h4>What Are Small Language Models?</h4>,
        <p>Small language models are AI models that are much smaller in size than the massive LLMs you’ve heard about. Instead of billions of parameters, they typically have millions or low billions of parameters. This might sound like a limitation—but it’s actually an advantage in many scenarios. Smaller models are faster, cheaper, and easier to run, while still performing surprisingly well on specific tasks.</p>,
        <h4>Why They Matter</h4>,
        <p><strong>Cost Efficiency</strong><br/>Large models require huge compute resources, expensive GPUs, and high electricity usage. Small models, by contrast, can run on consumer hardware or lightweight cloud instances, dramatically lowering costs. This makes AI accessible to startups, researchers, and even individual developers.</p>,
        <p><strong>Speed and Latency</strong><br/>SLMs respond faster because they process less data at each step. This is crucial for applications like chatbots, edge devices, mobile apps, or real-time tools where milliseconds matter.</p>,
        <p><strong>Privacy and Security</strong><br/>Because small models can run locally on a user’s device, they can process sensitive data without sending it to the cloud, reducing privacy risks. This is a huge advantage for sectors like healthcare, finance, and personal productivity tools.</p>,
        <p><strong>Energy Efficiency and Sustainability</strong><br/>AI has an environmental footprint. Running massive LLMs constantly consumes a lot of energy. Small models, however, consume far less power, making them more environmentally friendly.</p>,
        <p><strong>Customizability and Fine-Tuning</strong><br/>Small models are easier to fine-tune for niche domains. For example, a company could take a pre-trained small model and adapt it to legal documents, medical records, or internal corporate knowledge without massive computational overhead.</p>,
        <h4>The Hybrid Approach: Big + Small</h4>,
        <p>Many experts envision a future where big models provide general knowledge while small models handle specialized or real-time tasks. For instance, a small model could live on your phone and summarize your emails instantly, while a large model in the cloud handles complex reasoning tasks. This hybrid setup could make AI more practical, responsive, and cost-effective.</p>,
        <h4>Challenges Ahead</h4>,
        <p>Small models are not perfect. They struggle with complex reasoning and may generate less nuanced or creative outputs than large models. But for most real-world applications—like customer support, summarization, classification, and search—they’re already good enough.</p>,
        <h4>Why This Matters for the Future</h4>,
        <p>The rise of small language models signals a shift from “one-size-fits-all” AI to personalized, efficient, and accessible AI tools. They enable companies and individuals to leverage AI without huge infrastructure costs, privacy concerns, or latency issues. In short, small models may not grab headlines like GPT-4, but they’re quietly shaping the next generation of practical AI applications.</p>,
      ],
    },
    {
      id: 'raspi-lab',
      title: 'Building a Modern Raspberry Pi Home Lab: A Hands-On Sysadmin Journey',
      date: 'Jul 2025',
      excerpt: 'A step-by-step guide to building a complete home lab on Raspberry Pi — Linux servers, services, security, monitoring, networking, and backups.',
      content: [
        <p>This blog walks you through setting up a complete home lab on a Raspberry Pi, showing practical sysadmin skills in action. From installing Linux servers and configuring core services to security hardening, monitoring, networking, file sharing, backups, and even local DNS—it covers it all.</p>,
        <p>If you want a real, hands-on experience with Linux administration on actual hardware, this is a step-by-step guide that makes learning both practical and fun.</p>,
      ],
    },
    {
      id: 'chip-huyen-review',
      title: 'Why "AI Engineering" by Chip Huyen is a Must-Read for Developers',
      date: 'Jun 2025',
      excerpt: 'A practical look at Chip Huyen’s book on building real AI applications with foundation models — practical, product-focused, and accessible.',
      content: [
        <p>This post dives into Chip Huyen’s book, which focuses on building real AI applications using foundation models like large language models (LLMs). Unlike theory-heavy books, it emphasizes practical, product-focused AI engineering.</p>,
        <p>You’ll learn about prompt engineering, fine-tuning models, evaluation, and deploying AI apps in production. Clear and accessible, it’s a great read for both beginners and experienced developers looking to create reliable AI-powered applications.</p>,
      ],
    },
    {
      id: 'karpathy-hygiene',
      title: 'Digital Hygiene Lessons from Andrej Karpathy',
      date: 'May 2025',
      excerpt: 'Key tips from Andrej Karpathy on staying safe and private online — practical security and privacy recommendations.',
      content: [
        <p>This blog summarizes key tips from Andrej Karpathy on staying safe and private online. Highlights include using password managers, securing accounts with hardware keys like YubiKey, avoiding insecure IoT devices, choosing privacy-friendly tools like Signal and Brave, enabling disk encryption, and keeping work and personal computing separate.</p>,
        <p>It’s a practical guide for anyone looking to navigate the internet securely and responsibly.</p>,
      ],
    },
    {
      id: 'modern-stack',
      title: 'The Modern Full-Stack Tech Stack for AI-Powered Apps',
      date: 'Apr 2025',
      excerpt: 'Streamlit, FastAPI, Vercel, and LangChain — tools that make building AI apps fast and easy for prototypes and production.',
      content: [
        <p>A look at the modern tools that make building AI apps fast and easy. Streamlit helps you prototype AI apps quickly, FastAPI powers high-performance backend APIs, Vercel handles smooth serverless deployments, and LangChain orchestrates complex AI workflows with foundation models.</p>,
        <p>With this stack, you can build, deploy, and showcase functional AI apps in minutes—perfect for portfolios or rapid experimentation.</p>,
      ],
    },
    {
      id: 'mvp-servers',
      title: 'Why MVP Servers Are a Game-Changer for Modern Companies',
      date: 'Mar 2025',
      excerpt: 'Why lightweight MVP servers help teams validate ideas quickly: cost efficiency, faster time-to-market, and risk reduction.',
      content: [
        <p>In today’s fast-moving tech world, companies need to validate ideas quickly without committing to expensive infrastructure. That’s where MVP (Minimum Viable Product) servers come in. These are lightweight, flexible server setups designed to support the core features of a product without over-engineering or over-provisioning.</p>,
        <h4>Key Benefits for Companies</h4>,
        <ul>
          <li><strong>Cost Efficiency:</strong> Only pay for what you need while testing your product’s core functionality.</li>
          <li><strong>Faster Time-to-Market:</strong> Quick deployment helps startups and teams validate ideas before scaling.</li>
          <li><strong>Scalability on Demand:</strong> Once the MVP proves successful, the server architecture can be expanded without major overhauls.</li>
          <li><strong>Risk Reduction:</strong> Limiting resources early reduces the financial and technical risks of building a full-scale product that might not resonate with users.</li>
        </ul>,
        <p>Modern companies are increasingly using MVP servers in combination with containerization, cloud services, and CI/CD pipelines to iterate faster, optimize resources, and focus on delivering value to users.</p>,
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
          <li><strong>AI-Memory-Assistant</strong> — An AI-powered personal memory assistant built with the Modern JavaScript stack (React.js, Express.js, Node.js) and SQLite, designed to help users store, organize, and analyze their notes and ideas. It features smart categorization, advanced search, priority ratings, and an analytics dashboard with future-ready AI integration.</li>
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
          <p className="small">© {new Date().getFullYear()} Atishay Jain</p>
        </footer>
      </main>
    </div>
  );
}
