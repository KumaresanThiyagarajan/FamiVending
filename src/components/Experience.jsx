import React from 'react';
import './Experience.css';

const Experience = () => {
  const stats = [
    { id: 1, number: '60+', label: 'PROJECTS DONE' },
    { id: 2, number: '4+', label: 'YEAR OF EXPERIENCE' },
    { id: 3, number: '7+', label: 'LOCATED DISTRICTS' },
    { id: 4, number: '1000+', label: 'HAPPY CUSTOMERS' },
  ];

  return (
    <section className="experience-section">
      <div className="exp-overlay"></div>
      <div className="container exp-container">
        <h2 className="exp-title">Years Of Vending Excellence</h2>
        <p className="exp-subtitle">
          Providing reliable and modern vending machine solutions tailored to the unique needs of your business.
          <br className="hide-mobile" />
          Delivering convenience, quality, and seamless support in every location we serve.
        </p>
        <div className="exp-grid">
          {stats.map(stat => (
            <div className="exp-card" key={stat.id}>
              <h3 className="exp-number">{stat.number}</h3>
              <p className="exp-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
