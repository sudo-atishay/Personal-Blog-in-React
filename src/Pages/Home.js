
import React from "react";

function Home() {
  return (
    <div style={{ background: "#fff", color: "#111", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "0", margin: "0" }}>
      <div style={{ maxWidth: 700, margin: "40px auto", padding: "32px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderRadius: 12 }}>
        {/* Simple Navbar */}
        <nav style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <span style={{ fontWeight: "bold", fontSize: 22 }}>Atishay Jain</span>
        </nav>
        {/* Profile Image */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <img src="/profile.png" alt="Profile" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "2px solid #111" }} />
        </div>
        {/* Name & Title */}
        <h1 style={{ textAlign: "center", fontSize: 28, margin: "0 0 8px 0" }}>Atishay Jain</h1>
        <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: "normal", margin: "0 0 18px 0", color: "#444" }}>Software Developer | 3+ Years Experience</h2>
        {/* Contact Links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 24 }}>
          <a href="mailto:atishay2305@gmail.com" style={{ color: "#111", textDecoration: "underline" }}>Email</a>
          <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer" style={{ color: "#111", textDecoration: "underline" }}>GitHub</a>
          <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer" style={{ color: "#111", textDecoration: "underline" }}>LinkedIn</a>
        </div>
        {/* Summary */}
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 20, marginBottom: 8 }}>Summary</h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#222" }}>
            Dedicated software engineer with 3+ years of experience and a master's in software engineering. My expertise spans backend, automation, CI/CD, and developer experience. I thrive at the intersection of reliability and quality, designing APIs, hardening data workflows, and embedding automation that raises release confidence. With a strong foundation in Linux and cloud-native tools, I enjoy building resilient systems, optimizing infrastructure, and enabling teams through streamlined DevOps workflows. I value collaboration and continuous improvement, whether it’s mentoring peers, refining deployment strategies, or enhancing observability.
          </p>
        </section>
        {/* Skills */}
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 20, marginBottom: 8 }}>Technical Skills</h3>
          <ul style={{ columns: 2, fontSize: 16, color: "#222", margin: 0, padding: 0, listStyle: "none" }}>
            <li>Python</li>
            <li>Algorithms</li>
            <li>Linux</li>
            <li>AWS</li>
            <li>Telecommunications</li>
            <li>AI-driven Development</li>
            <li>Software Testing</li>
            <li>JavaScript</li>
            <li>MERN Stack</li>
            <li>Java</li>
            <li>Git</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </section>
        {/* Experience */}
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 20, marginBottom: 8 }}>Experience</h3>
          <ul style={{ fontSize: 16, color: "#222", margin: 0, padding: 0 }}>
            <li><strong>Software Developer</strong>, Amdocs, Alpharetta, GA, USA <span style={{ color: "#666" }}>(June 2024 – August 2025)</span></li>
            <li><strong>Software Developer Intern</strong>, Infogen Labs, California, USA <span style={{ color: "#666" }}>(May 2023 – July 2023)</span></li>
            <li><strong>Software Engineer in Test</strong>, Qualitest, Uttar Pradesh, India <span style={{ color: "#666" }}>(July 2021 – July 2022)</span></li>
            <li><strong>Research Intern</strong>, HCL Technologies, Uttar Pradesh, India <span style={{ color: "#666" }}>(April 2020 – July 2020)</span></li>
            <li><strong>Web Developer Intern</strong>, Minerva Technologies, New Delhi, India <span style={{ color: "#666" }}>(Feb 2020 – May 2020)</span></li>
          </ul>
        </section>
        {/* Education */}
        <section>
          <h3 style={{ fontSize: 20, marginBottom: 8 }}>Education</h3>
          <ul style={{ fontSize: 16, color: "#222", margin: 0, padding: 0 }}>
            <li><strong>Master's degree, Software Engineering</strong>, Stevens Institute of Technology <span style={{ color: "#666" }}>(Sep 2022 - May 2024)</span></li>
            <li><strong>Bachelor of Technology, Information Technology</strong>, APJ Abdul Kalam Technological University <span style={{ color: "#666" }}>(2017 - 2021)</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
