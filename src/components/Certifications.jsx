import React, { useState, useEffect } from 'react';

const certsData = [
  {
    title: 'Bootcamp Front-End',
    institution: 'Digital Innovation One',
    period: 'Concluído',
    description: 'Bootcamp intensivo de desenvolvimento front-end.'
  },
  {
    title: 'JavaScript Moderno',
    institution: 'Udemy',
    period: '20 horas',
    description: 'Curso de JavaScript moderno, abordando ES6+ e práticas atuais.'
  },
  {
    title: 'Treinamento UTI',
    institution: 'Escola Alge de Enfermagem',
    period: '24 horas (com distinção)',
    description: 'Treinamento especializado em Unidade de Terapia Intensiva.'
  },
  {
    title: 'Introdução ao Scrum',
    institution: 'Coursera',
    period: '12 horas',
    description: 'Curso introdutório sobre metodologias ágeis e Scrum.'
  }
];

function Certifications() {
  const [certs, setCerts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setCerts(certsData);
    }, 1000);
  }, []);

  return (
    <section>
      <h2 className="section-title">Certificações e Cursos</h2>
      {certs.length === 0 ? <p>Carregando...</p> : (
        <div className="cards-row">
          {certs.map((cert, idx) => (
            <div className="card" key={idx} style={{minWidth: 0}}>
              <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{cert.title}</div>
              <div style={{color: '#6b7280', fontSize: '0.95rem', marginBottom: 8}}>{cert.institution} | {cert.period}</div>
              <div style={{fontSize: '0.98rem', color: '#444'}}>{cert.description}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Certifications; 