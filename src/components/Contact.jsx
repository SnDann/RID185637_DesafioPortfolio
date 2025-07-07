import React from 'react';

function Contact() {
  return (
    <section>
      <h2 className="section-title">Contato</h2>
      <div className="cards-row" style={{justifyContent: 'center'}}>
        <div className="card" style={{minWidth: 0, background: 'transparent', boxShadow: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', padding: '24px 0'}}>
          <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" style={{color: '#222', fontSize: '2rem'}}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sndanndev/" target="_blank" rel="noopener noreferrer" style={{color: '#222', fontSize: '2rem'}}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact; 