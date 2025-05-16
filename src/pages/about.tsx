import Link from 'next/link';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

export default function About() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="about-page">
      {/* Navbar with Back button */}
      <nav className="navbar">
        <Link href="/" legacyBehavior>
          <a className="back-button" aria-label="Back to Home">&larr; Back</a>
        </Link>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} legacyBehavior>
                <a className={`menu-link ${item.name === 'About' ? 'active' : ''}`}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="about-content">
        {/* Introduction */}
        <section className="intro">
          <div className="avatar">
            <img
              src="/avatar.png"
              alt="3D avatar"
              width={500}
              height={500}
            />
          </div>
          <div className="intro-text">
            <p>
              Hey there — I&apos;m a curious mind powered by code, caffeine, and a deep passion for technology. As an engineering student majoring in AI and Machine Learning, I live at the intersection of logic and creativity.
            </p>
          </div>
        </section>

        <div className="content-grid">
          {/* Education */}
          <section className="content-section">
            <h2 className="section-title">
              <FaGraduationCap className="icon" />
              <span>Education</span>
            </h2>
            <div className="section-content">
              <p>Bachelor of Technology in AI and Machine Learning -MIT WPU Pune</p>
              <p>Expected graduation: 2026</p>
            </div>
          </section>

          {/* Experience */}
          <section className="content-section">
            <h2 className="section-title">
              <FaBriefcase className="icon" />
              <span>Experience</span>
            </h2>
            <div className="section-content">
              <p>Internship at ABC Company 
                Machine Learning Intern (Summer 2024)</p>
              <p>Research Assistant at XYZ Lab
                Computer Vision Projects</p>
            </div>
          </section>

          {/* Achievements */}
          <section className="content-section">
            <h2 className="section-title">
              <FaTrophy className="icon" />
              <span>Achievements</span>
            </h2>
            <div className="section-content">
              <p>NEXUS Hackathon - 2nd Runner Up</p>
              <p>SIH'24 DRDO Runner Up</p>
              <p>Xylem Hackathon Finalist</p>
            </div>
          </section>
        </div>
      </main>
      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background-color: var(--bg-color);
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
        .intro {
          display: flex;
          gap: 60px;
          align-items: center;
          margin-bottom: 40px;
          background: var(--section-bg);
          padding: 40px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }
        .avatar img {
          border-radius: 8px;
          width: 300px;
          height: 300px;
          object-fit: cover;
          border: 1px solid var(--border-color);
        }
        .intro-text h1 {
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .intro-text p {
          margin: 0;
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 100%;
        }
        .about-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .content-section {
          background-color: var(--card-bg);
          border-radius: 8px;
          padding: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .content-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.05);
        }

        .section-title {
          margin-top: 0;
          color: var(--text-primary);
          font-size: 20px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .section-title .icon {
          color: #4f46e5;
          font-size: 22px;
        }
        
        .section-content p {
          margin: 0 0 10px 0;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 15px;
        }
        
        .section-content p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
