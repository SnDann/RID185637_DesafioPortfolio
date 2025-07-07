import React from 'react';

const education = [
  {
    title: 'Técnico em Enfermagem',
    institution: 'Escola Alge de Enfermagem',
    location: 'Ribeirão Pires - SP',
    period: '09/2014',
    description: 'Curso técnico concluído com foco em práticas clínicas e hospitalares.'
  },
  {
    title: 'Ensino Médio Completo',
    institution: 'Escola João Roncon',
    location: '',
    period: '',
    description: 'Formação básica concluída.'
  }
];

function Education() {
  return (
    <section>
      <h2 className="section-title">Formação Acadêmica</h2>
      <div className="cards-row">
        {education.map((item, idx) => (
          <div className="card" key={idx} style={{minWidth: 0}}>
            <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{item.title}</div>
            <div style={{color: '#6b7280', fontSize: '0.95rem', marginBottom: 8}}>{item.institution} {item.location && `| ${item.location}`} {item.period && `| ${item.period}`}</div>
            <div style={{fontSize: '0.98rem', color: '#444'}}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 