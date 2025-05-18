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

export default function Projects() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  const projects = [
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
        <div className="projects-grid">
          {projects.map((project, index) => (
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
                  <span key={i} className="tech-tag" title={tech}>
                    {getTechIcon(tech)}
                    <span className="tech-name">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Fira Mono', monospace;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin: 30px auto;
          padding: 0 10px;
          width: 100%;
          align-items: stretch;
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
          min-height: 400px; /* Ensure minimum height */
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
          height: 180px; /* Fixed height for consistency */
          border-radius: 8px;
          overflow: hidden;
          margin: 0 0 16px 0;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          position: relative;
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
          flex-grow: 1;
          font-size: 0.95rem;
          min-height: 72px; /* Ensure consistent height for description */
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

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 15px;
          }
          
          .project-card {
            min-height: auto; /* Allow cards to grow naturally on mobile */
          }
          
          .project-image {
            height: 200px; /* Slightly larger image on mobile */
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
