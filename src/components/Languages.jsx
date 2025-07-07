import React from 'react';

const languages = [
  {
    language: 'Português',
    level: 'Nativo',
    description: 'Fluente em português, idioma nativo.'
  },
  {
    language: 'Inglês',
    level: 'Básico',
    description: 'Conhecimento básico para leitura e comunicação.'
  }
];

function Languages() {
  return (
    <section>
      <h2 className="section-title">Idiomas</h2>
      <div className="cards-row">
        {languages.map((lang, idx) => (
          <div className="card" key={idx} style={{minWidth: 0}}>
            <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{lang.language}</div>
            <div style={{color: '#6b7280', fontSize: '0.95rem', marginBottom: 8}}>{lang.level}</div>
            <div style={{fontSize: '0.98rem', color: '#444'}}>{lang.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages; 