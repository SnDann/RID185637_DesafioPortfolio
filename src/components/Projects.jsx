import React from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    title: 'LPA-Sales-Inventory-System',
    description: 'Sistema de controle de vendas e estoque, desenvolvido para facilitar a gestão de produtos, pedidos e relatórios em pequenas empresas.',
    link: 'https://github.com/SnDann/LPA-Sales-Inventory-System'
  },
  {
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    title: 'MedTracker-Web App Health Person',
    description: 'Aplicação web para acompanhamento de saúde, focada em monitoramento de pacientes, histórico clínico e lembretes de medicação.',
    link: 'https://github.com/SnDann/MedTracker-Web-App-Health-Person'
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'MIO - Personal Mobile',
    description: 'App mobile pessoal para organização de tarefas, agenda e anotações, com interface intuitiva e responsiva.',
    link: 'https://github.com/SnDann/MIO-Personal-Mobile'
  }
];

function Projects() {
  return (
    <section>
      <h2 className="section-title">Projetos</h2>
      <div className="cards-row">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flex: 1,
              minWidth: 0,
              maxWidth: 320,
              borderRadius: 16,
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.12s',
              margin: '0 0 0 0'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: 120,
                objectFit: 'cover',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                marginBottom: 16
              }}
            />
            <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, textAlign: 'center'}}>{project.title}</div>
            <div style={{fontSize: '0.98rem', color: '#444', textAlign: 'center', margin: '0 16px 24px 16px'}}>{project.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects; 