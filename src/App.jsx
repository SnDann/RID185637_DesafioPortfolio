import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import './App.css';

const sections = [
  { id: 'about', label: 'Sobre Mim' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'education', label: 'Formação Acadêmica' },
  { id: 'certifications', label: 'Certificações e Cursos' },
  { id: 'languages', label: 'Idiomas' },
  { id: 'footer', label: 'Contato' }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: id === 'footer' ? 'end' : 'start' });
  }
}

function App() {
  return (
    <div className="portfolio-container">
      <nav className="nav-menu nav-menu-right">
        {sections.map((section) => (
          <button
            key={section.id}
            className="nav-link"
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <header className="header" style={{marginTop: '0.5rem'}}>
        <div className="header-title">Olá, eu sou Daniel Pereira</div>
        <div className="header-subtitle">Desenvolvedor Full Stack Júnior</div>
        <a className="download-btn" href="/curriculo-daniel.pdf" download>Download resume</a>
      </header>
      <div className="sections">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="languages"><Languages /></section>
      </div>
      <footer className="footer" id="footer">
        <div className="social-icons" style={{marginBottom: 8}}>
          <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" style={{color: '#222', fontSize: '1.5rem', margin: '0 12px'}}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sndanndev/" target="_blank" rel="noopener noreferrer" style={{color: '#222', fontSize: '1.5rem', margin: '0 12px'}}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>© 2025 Daniel Pereira. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export default App;
