import React from "react";
import "./main.css";

export default function App() {
  return (
    <main>
      <div className="wrap">
        {/* Hero */}
  <header style={{ display: "flex", alignItems: "center", gap: 32, background: "transparent", color: "#fff", padding: "32px 0 24px" }}>
          <div style={{ flex: "0 0 auto" }}>
            <img src="/Atishay Jain Photo.jpg" alt="Profile" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px 0", color: "#fff" }}>Atishay Jain</h1>
            <p style={{ fontStyle: "italic", fontSize: 18, color: "#fff", margin: "0 0 16px 0" }}>
              I like to build reliable backend systems, automation, and developer tools
              <span style={{ color: '#2563eb', fontSize: '1.2em', marginLeft: 6 }}>🚀</span>
              <span style={{ color: '#facc15', fontSize: '1.2em', marginLeft: 2 }}>🛠️</span>
            </p>
            <div style={{ display: 'flex', gap: '18px', marginTop: '12px' }}>
              <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>GitHub</a>
              <a href="mailto:atishay2305@gmail.com" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>Email</a>
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about">
          <h2>👨‍💼 About</h2>
          <p>
            Software engineer with 3+ years of experience focused on backend
            systems, CI/CD, and automation. I like building reliable services,
            hardening data workflows, and improving developer productivity with
            clean tooling and observability.
          </p>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>💼 Experience</h2>
          <ul>
            <li>
              <span className="role">Software Developer</span> — Amdocs,
              Alpharetta, GA, USA
              <span className="meta"> · June 2024 – August 2025</span>
            </li>
            <li>
              <span className="role">Software Developer Intern</span> — Infogen
              Labs, California, USA
              <span className="meta"> · May 2023 – July 2023</span>
            </li>
            <li>
              <span className="role">Software Engineer in Test</span> — Qualitest,
              Uttar Pradesh, India
              <span className="meta"> · July 2021 – July 2022</span>
            </li>
            <li>
              <span className="role">Research Intern</span> — HCL Technologies,
              Uttar Pradesh, India
              <span className="meta"> · April 2020 – July 2020</span>
            </li>
            <li>
              <span className="role">Web Developer Intern</span> — Minerva
              Technologies, New Delhi, India
              <span className="meta"> · Feb 2020 – May 2020</span>
            </li>
          </ul>
        </section>

        {/* Education */} 
        <section id="education">
          <h2>🏫 Education</h2>
          <ul style={{padding: 0, margin: 0}}>
            <li style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 24}}>
              <span className="role">Master's, Software Engineering</span>
              <span>&nbsp;—&nbsp;Stevens Institute of Technology&nbsp;·&nbsp;Sep 2022 – May 2024</span>
            </li>
            <li style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8}}>
              <span className="role">B.Tech, Information Technology</span>
              <span>&nbsp;—&nbsp;APJ Abdul Kalam Technological University&nbsp;·&nbsp;2017 – 2021</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
