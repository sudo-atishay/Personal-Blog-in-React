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
              Exploring, improving, and persevering — in tech and beyond.
            </p>
            <div style={{ display: 'flex', gap: '18px', marginTop: '12px' }}>
              <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>GitHub</a>
              <a href="mailto:atishay2305@gmail.com" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>Email</a>
            </div>
          </div>
        </header>

        {/* Profile Paragraph */}
        <section id="profile">
          <p style={{ textAlign: 'justify' }}>
            Tech enthusiast with a strong focus on security, Linux, and cloud infrastructure, bringing over three years of experience in designing, running, and securing systems that are reliable, scalable, and efficient. With a Master’s degree in Software Engineering from New Jersey, enjoys experimenting with company-style lab environments that bring together networks, services, and automation to better understand how real-world infrastructure works and how it can be improved. Passionate about cybersecurity, system administration, and exploring both blue and red team practices, approaching technology as a craft that rewards curiosity, persistence, and continuous learning. A strong advocate of software ownership, open source, and dependable tools that empower developers and organizations to innovate with confidence. Outside of tech, a long-distance runner for more than six years, logging thousands of kilometers, and carrying the same discipline, endurance, and focus from running into the approach of building resilient systems and solving complex technical challenges.
          </p>
        </section>
      </div>
    </main>
  );
}
