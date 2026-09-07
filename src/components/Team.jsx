import React from 'react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'SHANMADHI DEVI SURESH',
    title: 'Chief Executive Officer',
    image: '/ceo.png',
  },
  {
    id: 2,
    name: 'SURESH SUBRAMANIYAM',
    title: 'Chief Financial Officer',
    image: '/cfo.png',
  },
  {
    id: 3,
    name: 'NARAYAN KARTHICK RADHA',
    title: 'Chief Operating Officer',
    image: '/coo.png',
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">

        <div className="team-header">
          <div className="team-subtitle-wrapper">
            <span className="team-line"></span>
            <span className="team-subtitle">VENDING EXPERTS</span>
            <span className="team-line"></span>
          </div>
          <h2 className="team-title">Meet Our Vending Team</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.title}</p>
                <div className="team-socials">
                  <a href="#" className="social-icon wp">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.57,7.24a3.17,3.17,0,0,1,.13.88c0,1.21-.49,2.71-1.34,4.42l-2.73,7.6A8.19,8.19,0,0,1,4,12a7.87,7.87,0,0,1,.8-3.4,2.37,2.37,0,0,0,.19-1.2A11.75,11.75,0,0,0,4.1,6.54a8.21,8.21,0,0,1,7.09-4.34c3,.06,5.32,1.38,5.32,3.82C16.51,7.25,15.71,7.91,15,8.51c-.65.57-1.12,1-1.12,1.6,0,.43.2.78.68,1.14C15.82,12.35,17.57,9.24,17.57,9.24Z" /></svg>
                  </a>
                  <a href="#" className="social-icon fb">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
                  </a>
                  <a href="#" className="social-icon tw">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22 6c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1-1.4-1.5-3.8-1.5-5.2 0-1 1.1-1.3 2.6-1 4-4.2-.2-8-2.2-10.4-5.4-.5.8-.7 1.8-.7 2.8 0 1.5.8 2.8 2 3.6-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.5 1.7 2.1 2.8 3.9 2.9-2 1.6-4.7 2.2-7.1 1.9 1.9 1.2 4.1 1.9 6.4 1.9 8.2 0 12.9-7.1 12.3-13.4.8-.5 1.4-1.2 1.9-2z" /></svg>
                  </a>
                  <a href="#" className="social-icon li">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                  </a>
                  <a href="#" className="social-icon yt">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21.58,7.19A2.71,2.71,0,0,0,19.67,5.3C17.94,4.86,12,4.86,12,4.86s-5.94,0-7.67.44A2.68,2.68,0,0,0,2.42,7.19,29,29,0,0,0,2,12a29,29,0,0,0,.42,4.81,2.71,2.71,0,0,0,1.91,1.89c1.73.44,7.67.44,7.67.44s5.94,0,7.67-.44a2.71,2.71,0,0,0,1.91-1.89A29,29,0,0,0,22,12a29,29,0,0,0-.42-4.81ZM10,15V9l5.2,3Z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
