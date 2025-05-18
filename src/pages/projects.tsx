import Link from 'next/link';
import { 
  FaServer, 
  FaRobot, 
  FaGithub, 
  FaTable, 
  FaTicketAlt,
  FaChartLine,
  FaMicrochip,
  FaHeartbeat 
} from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiRedis, SiPostgresql } from 'react-icons/si';
import { useState, useMemo } from 'react';

// Extract all unique technologies from projects
const allTechnologies = [
  'React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Crypto',
  'MERN Stack', 'Chart.js', 'Python', 'LLM', 'Real-time Data',
  'Data Visualization', 'CNN', 'TDOA', 'Signal Processing',
  'LangChain', 'OpenAI', 'Streamlit', 'GitHub API', 'Redis',
  'Flask', 'Machine Learning', 'PostgreSQL', 'Pinecone',
  'Scikit-learn', 'LightGBM', 'RDKit', 'FastAPI', 'Docker'
].sort();

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTech([]);
    setSearchQuery('');
  };
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  const projects = [
    {
      title: 'SIDER',
      date: '03/2024 - 05/2024',
      description: 'Drug Side-Effect Prediction System using SMILES strings and multi-label classification.',
      technologies: ['Python', 'Scikit-learn', 'LightGBM', 'RDKit', 'FastAPI', 'Streamlit', 'Docker'],
      icon: <FaHeartbeat className="project-icon" />,
      github: '#', // Add your GitHub link here
      image: '/projects/sider.jpg'
    },
    {
      title: 'SecureVault',
      date: '01/2025 - 04/2025',
      description: 'A secure full-stack password manager with AES encryption and JWT authentication.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Crypto'],
      icon: <FaServer className="project-icon" />,
      github: 'https://github.com/Faiz9771/Securevault.github.io',
      image: '/projects/securevault.jpg'
    },
    {
      title: 'Quillt',
      date: '06/2024 - 10/2024',
      description: 'Smart finance tracker with prediction tools and data visualization.',
      technologies: ['MERN Stack', 'JWT', 'Chart.js', 'MongoDB'],
      icon: <FaChartLine className="project-icon" />,
      github: 'https://github.com/Faiz9771/quillt',
      image: '/projects/quillt.jpg'
    },
    {
      title: 'Ticksense',
      date: '02/2025 - 04/2025',
      description: 'High-frequency trading simulator with LLM-powered trade analysis.',
      technologies: ['Python', 'LLM', 'Real-time Data', 'Data Visualization'],
      icon: <FaRobot className="project-icon" />,
      github: 'https://github.com/Faiz9771/ticksense',
      image: '/projects/ticksense.jpg'
    },
    {
      title: 'GILDA',
      date: '09/2024 - 01/2025',
      description: 'Gunshot detection system with TDOA localization and CNN classification.',
      technologies: ['Python', 'CNN', 'TDOA', 'Signal Processing'],
      icon: <FaMicrochip className="project-icon" />,
      github: 'https://github.com/Faiz9771/gilda',
      image: '/projects/gilda.jpg'
    },
    {
      title: 'MediMitra',
      date: '10/2023 - 10/2023',
      description: 'AI health companion for rural healthcare assistance.',
      technologies: ['LangChain', 'OpenAI', 'LLM', 'Streamlit'],
      icon: <FaHeartbeat className="project-icon" />,
      github: 'https://github.com/Faiz9771/medimitra',
      image: '/projects/medimitra.jpg'
    },
    {
      title: 'Gitalyse',
      date: '04/2025 - 05/2025',
      description: 'GitHub repository analytics dashboard with LLM-powered insights.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'GitHub API', 'Redis'],
      icon: <FaGithub className="project-icon" />,
      github: 'https://github.com/Faiz9771/gitalyse',
      image: '/projects/gitalyse.jpg'
    },
    {
      title: 'Algotable',
      date: '04/2025 - 05/2025',
      description: 'ML algorithm recommender with periodic table UI.',
      technologies: ['React.js', 'Flask', 'Python', 'Machine Learning'],
      icon: <FaTable className="project-icon" />,
      github: 'https://github.com/Faiz9771/algotable',
      image: '/projects/algotable.jpg'
    },
    {
      title: 'TicketAI',
      date: '02/2025 - 05/2025',
      description: 'AI-driven CRM ticket prioritization and management system.',
      technologies: ['Python', 'React.js', 'PostgreSQL', 'OpenAI', 'Pinecone'],
      icon: <FaTicketAlt className="project-icon" />,
      github: 'https://github.com/Faiz9771/TicketAI',
      image: '/projects/ticketai.jpg'
    }
  ];

  // Technology icon mapping with black/white icons
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    const iconStyle = { filter: 'grayscale(100%) brightness(0.7)' };
    
    switch (techLower) {
      case 'python':
        return <SiPython className="tech-icon" style={iconStyle} title={tech} />;
      case 'javascript':
        return <SiJavascript className="tech-icon" style={iconStyle} title={tech} />;
      case 'react':
      case 'react.js':
        return <SiReact className="tech-icon" style={iconStyle} title={tech} />;
      case 'node.js':
        return <SiNodedotjs className="tech-icon" style={iconStyle} title={tech} />;
      case 'mongodb':
        return <SiMongodb className="tech-icon" style={iconStyle} title={tech} />;
      case 'express':
        return <SiExpress className="tech-icon" style={iconStyle} title={tech} />;
      case 'redis':
        return <SiRedis className="tech-icon" style={iconStyle} title={tech} />;
      case 'postgresql':
        return <SiPostgresql className="tech-icon" style={iconStyle} title={tech} />;
      case 'llm':
        return <span className="tech-icon" style={iconStyle}>🤖</span>;
      case 'real-time data':
        return <span className="tech-icon" style={iconStyle}>⚡</span>;
      case 'data visualization':
        return <span className="tech-icon" style={iconStyle}>📊</span>;
      case 'chart.js':
        return <span className="tech-icon" style={iconStyle}>📈</span>;
      case 'machine learning':
        return <span className="tech-icon" style={iconStyle}>🧠</span>;
      default:
        return <span className="tech-icon" style={iconStyle}></span>;
    }
  };

  // Filter projects based on selected technologies and search query
  const filteredProjects = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();
    
    return projects.filter(project => {
      // Normalize project technologies for case-insensitive comparison
      const projectTechs = project.technologies.map(tech => tech.toLowerCase());
      
      // Filter by selected technologies (case-insensitive)
      const matchesTech = selectedTech.length === 0 || 
        selectedTech.every(tech => 
          projectTechs.includes(tech.toLowerCase())
        );
      
      // Skip further checks if tech filter doesn't match
      if (!matchesTech) return false;
      
      // Skip search filter if no search query
      if (!searchLower) return true;
      
      // Check if search query matches title or description (case-insensitive)
      const matchesSearch = 
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchLower)
        );
      
      return matchesSearch;
    });
  }, [projects, selectedTech, searchQuery]);

  return (
    <div className="projects-page">
      {/* Navbar with Back button */}
      <nav className="navbar">
        <Link href="/" legacyBehavior>
          <a className="back-button" aria-label="Back to Home">&larr; Back</a>
        </Link>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} legacyBehavior>
                <a className={`menu-link ${item.name === 'Projects' ? 'active' : ''}`}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="projects-content">
        <h1>Projects</h1>
        
        {/* Search and Filter Section */}
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-box">
            <div className="dropdown">
              <button className="dropdown-toggle">
                {selectedTech.length > 0 ? `Tech (${selectedTech.length})` : 'Filter by Tech'}
              </button>
              <div className="dropdown-menu">
                {allTechnologies.map((tech) => (
                  <label key={tech} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={selectedTech.includes(tech)}
                      onChange={() => toggleTech(tech)}
                    />
                    {tech}
                  </label>
                ))}
                {selectedTech.length > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="clear-filters"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-title-date">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`tech-tag ${selectedTech.includes(tech) ? 'highlight' : ''}`} 
                    title={tech}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTech(tech);
                    }}
                  >
                    {getTechIcon(tech)}
                    <span className="tech-name">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
            ))
          ) : (
            <div className="no-projects">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Fira Mono', monospace;
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding: 10px 0;
          margin-bottom: 20px;
          background-color: var(--nav-bg);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .back-button {
          color: var(--text-primary);
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          text-decoration: none;
        }

        .menu {
          list-style: none;
          display: flex;
          gap: 25px;
          margin: 0;
          padding: 0;
          font-size: 14px;
        }

        .menu li {
          margin: 0;
          padding: 0;
        }

        .menu a {
          text-decoration: none;
          color: var(--text-primary) !important;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: block;
        }

        .menu a:hover {
          color: var(--text-primary) !important;
          background-color: var(--hover-bg);
          text-decoration: none;
        }

        .menu a.active {
          color: var(--text-primary) !important;
          font-weight: 600;
          text-decoration: underline;
        }

        .projects-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 30px auto;
          padding: 0 20px;
          width: 100%;
          max-width: 1400px;
          box-sizing: border-box;
        }
        
        @media (max-width: 1024px) {
          .projects-grid {
            gap: 25px;
            margin: 30px auto;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin: 25px 10px;
            padding: 0;
          }
        }
        
        @media (max-width: 480px) {
          .projects-grid {
            margin: 20px 0;
            gap: 20px;
          }
          
          .project-card {
            border-radius: 0;
            border-left: none;
            border-right: none;
          }
        }

        .project-card {
          background-color: var(--card-bg);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 400px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #333, #666);
          opacity: 0.7;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          border-color: var(--border-hover);
        }
        
        .project-card:hover::before {
          opacity: 1;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin: 0 0 16px 0;
          position: relative;
        }

        .project-icon {
          background: var(--bg-tertiary);
          min-width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          font-size: 1.1rem;
          transition: all 0.25s ease;
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .project-title-date {
          flex: 1;
        }

        .project-title-date h3 {
          margin: 0 0 4px 0;
          font-size: 1.2rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .project-date {
          display: block;
          font-size: 0.8rem;
          color: var(--text-tertiary);
          margin-bottom: 5px;
        }

        .github-link {
          color: var(--text-secondary);
          transition: color 0.2s ease;
          margin-left: auto;
          font-size: 1.2rem;
          opacity: 0.7;
        }

        .github-link:hover {
          color: var(--text-primary);
          opacity: 1;
        }

        .project-image {
          width: 100%;
          height: 180px;
          border-radius: 8px;
          overflow: hidden;
          margin: 0 0 16px 0;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          position: relative;
          flex-shrink: 0;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          position: absolute;
          top: 0;
          left: 0;
          display: block; /* Ensure proper rendering */
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex: 1 0 auto;
          font-size: 0.95rem;
          min-height: 72px;
        }

        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          min-height: 32px; /* Ensure consistent height for tech tags */
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 14px;
          font-size: 0.7rem;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
          border: 1px solid var(--border-color);
          line-height: 1;
          height: 24px;
          opacity: 0.9;
          cursor: pointer;
          user-select: none;
        }
        
        .tech-tag.highlight {
          background: rgba(79, 70, 229, 0.1);
          border-color: #4f46e5;
          color: #4f46e5;
        }
        
        .tech-tag:hover {
          background: var(--hover-bg);
          transform: translateY(-1px);
          opacity: 1;
        }

        .tech-tag:hover {
          background: var(--hover-bg);
          transform: translateY(-1px);
          opacity: 1;
        }

        .tech-icon {
          font-size: 0.8rem;
          opacity: 0.8;
          display: inline-flex;
          align-items: center;
        }

        .tech-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        
        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }
        }

        /* Filters Section */
        .filters-container {
          margin: 0 auto 2rem;
          background: var(--card-bg);
          border-radius: 12px;
          padding: 1rem;
          border: 1px solid var(--border-color);
          max-width: 1000px;
          width: calc(100% - 40px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .search-box {
          position: relative;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .search-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .clear-search {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
          padding: 0.5rem;
        }

        .tech-filters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .selected-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .tech-tag.selected {
          background: rgba(79, 70, 229, 0.1);
          color: #4f46e5;
          padding: 0.5rem 0.9rem;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          border: 1px solid rgba(79, 70, 229, 0.3);
        }

        .remove-tech {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin-left: 0.25rem;
          font-size: 1.1em;
          line-height: 1;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .remove-tech:hover {
          opacity: 1;
        }

        .clear-filters {
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
          font-size: 0.85rem;
          margin-left: 0.5rem;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          transition: background 0.2s;
          font-weight: 500;
        }

        .clear-filters:hover {
          background: rgba(79, 70, 229, 0.1);
        }

        .tech-select {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.95rem;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
          padding-right: 2.5rem;
          transition: all 0.2s ease;
        }

        .tech-select:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .tech-select option {
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 0.5rem;
        }

        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 900px;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            gap: 20px;
          }
        }
        
        /* Filters Section */
        .filters-container {
          margin: 0 auto 2rem;
          background: var(--card-bg);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          max-width: 1400px;
          width: calc(100% - 40px);
        }

        .search-box {
          position: relative;
          margin-bottom: 1rem;
          width: 100%;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .clear-search {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
        }

        .tech-filters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .selected-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }

        .tech-tag.selected {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          padding: 0.4rem 0.75rem;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .remove-tech {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          font-size: 1.1em;
          line-height: 1;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .remove-tech:hover {
          opacity: 1;
        }

        .clear-filters {
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
          font-size: 0.85rem;
          margin-left: 0.5rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .clear-filters:hover {
          background: rgba(79, 70, 229, 0.1);
        }

        .tech-select {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.95rem;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
          padding-right: 2.5rem;
        }

        .tech-select:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .tech-select option {
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 0.5rem;
        }
        
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
          }
        }
        
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 900px;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 15px;
            max-width: 500px;
            margin: 20px auto;
          }
          
          .filters-container {
            padding: 1.25rem;
            width: calc(100% - 30px);
            margin: 0 auto 1.5rem;
          }
          
          .tech-select, .search-input {
            font-size: 0.9rem;
            padding: 0.7rem 1rem;
          }
          
          .tech-tag.selected {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
          
          .projects-page {
            padding: 15px;
          }
        }
          
          .project-card {
            min-height: auto;
            max-width: 100%;
            margin: 0 auto;
          }
          
          .project-image {
            height: 200px;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .page-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
