import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

type Project = { title: string; date: string; description: string; technologies: string[]; github: string; image: string };

const projects: Project[] = [
  { title: 'SIDER', date: '03/2024 — 05/2024', description: 'Drug side-effect prediction using SMILES strings and multi-label classification.', technologies: ['Python', 'Scikit-learn', 'LightGBM', 'RDKit', 'FastAPI', 'Streamlit', 'Docker'], github: '#', image: '/projects/sider.jpg' },
  { title: 'SecureVault', date: '01/2025 — 04/2025', description: 'A secure full-stack password manager with AES encryption and JWT authentication.', technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Crypto'], github: 'https://github.com/Faiz9771/Securevault.github.io', image: '/projects/securevault.jpg' },
  { title: 'Quillt', date: '06/2024 — 10/2024', description: 'Smart finance tracker with prediction tools and data visualization.', technologies: ['MERN Stack', 'JWT', 'Chart.js', 'MongoDB'], github: 'https://github.com/Faiz9771/quillt', image: '/projects/quillt.jpg' },
  { title: 'Ticksense', date: '02/2025 — 04/2025', description: 'High-frequency trading simulator with LLM-powered trade analysis.', technologies: ['Python', 'LLM', 'Real-time Data', 'Data Visualization'], github: 'https://github.com/Faiz9771/ticksense', image: '/projects/ticksense.jpg' },
  { title: 'GILDA', date: '09/2024 — 01/2025', description: 'Gunshot detection system with TDOA localization and CNN classification.', technologies: ['Python', 'CNN', 'TDOA', 'Signal Processing'], github: 'https://github.com/Faiz9771/gilda', image: '/projects/gilda.jpg' },
  { title: 'MediMitra', date: '10/2023', description: 'AI health companion for rural healthcare assistance.', technologies: ['LangChain', 'OpenAI', 'LLM', 'Streamlit'], github: 'https://github.com/Faiz9771/medimitra', image: '/projects/medimitra.jpg' },
  { title: 'Gitalyse', date: '04/2025 — 05/2025', description: 'GitHub repository analytics dashboard with LLM-powered insights.', technologies: ['React.js', 'Node.js', 'MongoDB', 'GitHub API', 'Redis'], github: 'https://github.com/Faiz9771/gitalyse', image: '/projects/gitalyse.jpg' },
  { title: 'Algotable', date: '04/2025 — 05/2025', description: 'ML algorithm recommender with a periodic-table interface.', technologies: ['React.js', 'Flask', 'Python', 'Machine Learning'], github: 'https://github.com/Faiz9771/algotable', image: '/projects/algotable.jpg' },
  { title: 'TicketAI', date: '02/2025 — 05/2025', description: 'AI-driven CRM ticket prioritization and management system.', technologies: ['Python', 'React.js', 'PostgreSQL', 'OpenAI', 'Pinecone'], github: 'https://github.com/Faiz9771/TicketAI', image: '/projects/ticketai.jpg' }
];

const technologies = Array.from(new Set(projects.flatMap(project => project.technologies))).sort();
const menuItems = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Projects', path: '/projects' }, { name: 'Contact', path: '/contact' }];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [technology, setTechnology] = useState('all');
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter(project => {
      const searchable = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();
      return (technology === 'all' || project.technologies.includes(technology)) && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [query, technology]);

  return (
    <div className="projects-page">
      <nav className="navbar">
        <Link href="/" className="back-button">&larr; Back</Link>
        <ul className="menu">{menuItems.map(item => <li key={item.name}><Link href={item.path} className={item.name === 'Projects' ? 'active' : ''}>{item.name}</Link></li>)}</ul>
      </nav>
      <main className="projects-content">
        <header className="page-heading"><span className="eyebrow">SELECTED WORK</span><h1>Projects</h1><p>A collection of systems I&apos;ve designed, built, and shipped.</p></header>
        <div className="filters" aria-label="Project filters">
          <label><span className="sr-only">Search projects</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects" /></label>
          <label><span className="sr-only">Filter by technology</span><select value={technology} onChange={event => setTechnology(event.target.value)}><option value="all">All technologies</option>{technologies.map(tech => <option key={tech} value={tech}>{tech}</option>)}</select></label>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => <article className="project-card" key={project.title}>
            <img src={project.image} alt={`${project.title} project preview`} />
            <div className="project-body"><div className="project-meta"><span>{project.date}</span><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}><FaGithub /></a></div><h2>{project.title}</h2><p>{project.description}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div>
          </article>)}
        </div>
        {filteredProjects.length === 0 && <p className="empty-state">No projects match those filters.</p>}
      </main>
      <style jsx>{`
        .projects-page { min-height: 100vh; padding: 20px; max-width: 1240px; margin: 0 auto; box-sizing: border-box; color: var(--text-primary); font-family: 'Fira Mono', monospace; }
        .navbar { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding: 10px 0; position: sticky; top: 0; z-index: 2; background: rgba(17, 20, 17, .72); backdrop-filter: blur(12px); }
        .back-button, .menu a { color: var(--text-primary); text-decoration: none; font-size: .8rem; font-weight: 700; }.back-button { padding: 5px 0; }.back-button:hover, .menu a:hover, .menu a.active { color: var(--accent); }
        .menu { display: flex; gap: 1.25rem; list-style: none; margin: 0; padding: 0; }
        .page-heading { margin: 5rem 0 2.5rem; max-width: 650px; }.eyebrow { color: var(--accent); font-size: .72rem; font-weight: 700; letter-spacing: .18em; }h1 { font-size: clamp(2.5rem, 7vw, 5rem); letter-spacing: -.08em; line-height: 1; margin: .8rem 0 1rem; }.page-heading p { color: var(--text-secondary); line-height: 1.7; margin: 0; }
        .filters { border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); display: flex; gap: 1rem; padding: .9rem 0; margin-bottom: 2rem; }.filters input, .filters select { background: transparent; border: 0; color: var(--text-primary); font: inherit; font-size: .78rem; outline: 0; padding: .45rem 0; }.filters input { min-width: 230px; }.filters select { color: var(--text-secondary); cursor: pointer; }.filters option { background: #171b16; color: white; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }.project-card { border: 1px solid var(--border-color); background: rgba(17, 20, 17, .42); overflow: hidden; transition: transform .2s ease, border-color .2s ease; }.project-card:hover { transform: translateY(-4px); border-color: var(--accent); }.project-card > img { display: block; width: 100%; height: 170px; object-fit: cover; filter: saturate(.7); transition: filter .2s ease; }.project-card:hover > img { filter: saturate(1); }.project-body { padding: 1.15rem; }.project-meta { color: var(--muted); display: flex; justify-content: space-between; font-size: .68rem; letter-spacing: .04em; }.project-meta a { color: var(--text-secondary); font-size: 1rem; }.project-meta a:hover { color: var(--accent); }h2 { font-size: 1.25rem; margin: .8rem 0 .55rem; }.project-body p { color: var(--text-secondary); font-size: .78rem; line-height: 1.7; min-height: 3.9rem; margin: 0; }.tech-list { border-top: 1px solid rgba(174, 255, 66, .25); display: flex; flex-wrap: wrap; gap: .4rem; margin-top: 1.1rem; padding-top: .75rem; }.tech-list span { color: var(--muted); font-size: .62rem; }.empty-state { color: var(--text-secondary); padding: 3rem 0; }.sr-only { height: 1px; margin: -1px; overflow: hidden; position: absolute; width: 1px; clip: rect(0, 0, 0, 0); }
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }@media (max-width: 620px) { .projects-page { padding: 16px; }.navbar { align-items: flex-start; gap: 1rem; }.menu { flex-wrap: wrap; gap: .35rem .75rem; justify-content: flex-end; }.page-heading { margin-top: 3.5rem; }.filters { align-items: flex-start; flex-direction: column; }.projects-grid { grid-template-columns: 1fr; }.filters input { min-width: 0; width: 100%; } }
      `}</style>
    </div>
  );
}
