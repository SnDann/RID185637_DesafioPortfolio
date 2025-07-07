import React from 'react';

const skills = [
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-solid fa-code', label: 'TypeScript' },
  { icon: 'fa-solid fa-hashtag', label: 'C#' },
  { icon: 'fa-brands fa-html5', label: 'HTML5' },
  { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
  { icon: 'fa-brands fa-git-alt', label: 'Git & GitHub' },
  { icon: 'fa-solid fa-users', label: 'Scrum' }
];

function Skills() {
  return (
    <section>
      <h2 className="section-title">Habilidades</h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{background: '#fff', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '32px 24px', display: 'flex', gap: '32px', alignItems: 'center'}}>
          {skills.map((skill, idx) => (
            <i key={idx} className={skill.icon} style={{color: '#646cff', fontSize: '2.2rem'}} title={skill.label}></i>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 