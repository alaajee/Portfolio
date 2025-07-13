// src/Skills.js
import './Skills.css'; // Assure-toi de créer ce fichier pour le style

function Skills() {
  return (
    <div className="Skills-page">
      <div className="skill-bubble skill1">
        Cloud Architecture
        <div className="tooltip">
          Design scalable systems, CI/CD, Infrastructure as Code (IaC), etc.
        </div>
      </div>
      <div className="skill-bubble skill2">
        Linux Kernel Development
        <div className="tooltip">
          Kernel modules, memory management, drivers, and system calls.
        </div>
      </div>
      <div className="skill-bubble skill3">
        Web Development
        <div className="tooltip">
          React, Node.js, MongoDB, REST APIs, and responsive UI/UX.
        </div>
      </div>
      <div className="skill-bubble skill4">
        Low-level Programming
        <div className="tooltip">
          C, Assembly, hardware interfacing, performance optimization.
        </div>
      </div>

      <div className="current-skill-banner">
        🔥 Currently focusing on: <strong>AWS</strong>
      </div>

    </div>
  );
}

export default Skills;
