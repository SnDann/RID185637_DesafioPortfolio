import React from 'react';

const experiences = [
  {
    company: 'Hospital Santa Helena',
    location: 'Santo André – SP',
    period: '2017 – Atual',
    role: 'Técnico de Enfermagem',
    description: 'Atuação na assistência direta ao paciente em ambiente hospitalar de alta complexidade. Trabalho em equipe multidisciplinar com foco em melhoria de processos e qualidade do atendimento.'
  },
  {
    company: 'Beneficência Portuguesa - Hospital e Maternidade',
    location: 'São Paulo – SP',
    period: '02/2015 – 03/2017',
    role: 'Técnico de Enfermagem',
    description: 'Atendimento em Unidade de Terapia Intensiva (UTI), realizando monitoramento contínuo e cuidados críticos. Foco em ética, agilidade e precisão.'
  }
];

const extraText = `Além da experiência hospitalar, atuei como freelancer e em projetos em grupo, incluindo o desenvolvimento de um sistema educacional/plataforma facultativa e de um Gestor de Currículos Online. Nessas iniciativas, contribuí com análise de requisitos, desenvolvimento front-end e integração de funcionalidades, sempre focando em soluções práticas e colaborativas.`;

function Experience() {
  return (
    <section>
      <h2 className="section-title">Experiência Profissional</h2>
      <div className="cards-row">
        {experiences.map((exp, idx) => (
          <div className="card" key={idx} style={{minWidth: 0}}>
            <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{exp.role} - {exp.company}</div>
            <div style={{color: '#6b7280', fontSize: '0.95rem', marginBottom: 8}}>{exp.location} | {exp.period}</div>
            <div style={{fontSize: '0.98rem', color: '#444'}}>{exp.description}</div>
          </div>
        ))}
      </div>
      <div className="cards-row" style={{marginTop: 16}}>
        <div className="card" style={{background: '#f7f9fb'}}>
          <div style={{fontWeight: 600, fontSize: '1.05rem', marginBottom: 6}}>
            Projetos Freelancer & Colaborativos
          </div>
          <div style={{fontSize: '0.98rem', color: '#444'}}>{extraText}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience; 