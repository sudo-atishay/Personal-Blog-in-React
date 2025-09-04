import React from "react";
import "./main.css";

export default function App() {
  return (
    <main>
      <div className="wrap">
        {/* Hero */}
        <header>
          <h1>Atishay Jain</h1>
          <p className="tagline">
            Software Engineer — backend, automation, and developer experience
          </p>
          <nav className="socials" aria-label="Social links">
            <img src="/favicon.ico" alt="favicon" style={{ width: 32, height: 32, verticalAlign: "middle", marginRight: 8 }} />
            <a href="mailto:atishay2305@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="https://github.com/sudo-atishay" target="_blank" rel="noreferrer noopener">GitHub</a>
          </nav>
        </header>

        {/* About */}
        <section id="about">
          <h2>About</h2>
          <p>
            Software engineer with 3+ years of experience focused on backend
            systems, CI/CD, and automation. I like building reliable services,
            hardening data workflows, and improving developer productivity with
            clean tooling and observability.
          </p>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>
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
          <h2>Education</h2>
          <ul>
            <li>
              <span className="role">Master's, Software Engineering</span> —
              Stevens Institute of Technology
              <span className="meta"> · Sep 2022 – May 2024</span>
            </li>
            <li>
              <span className="role">B.Tech, Information Technology</span> — APJ
              Abdul Kalam Technological University
              <span className="meta"> · 2017 – 2021</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
