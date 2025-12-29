import React from 'react';
import './Team.css';

function Team() {
  return (
    <section id="team" className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-member">John Doe - CEO</div>
        <div className="team-member">Jane Smith - Architect</div>
        <div className="team-member">Mark Lee - Project Manager</div>
      </div>
    </section>
  );
}

export default Team;
