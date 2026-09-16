import Link from 'next/link';
import { FaCode, FaGraduationCap, FaTrophy } from 'react-icons/fa';

export default function About() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
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
        <section className="intro">
          <span className="eyebrow">PROFILE</span>
          <h1>Faiz Memon — AI/ML engineer building practical systems.</h1>
          <p>
            I build thoughtful software at the intersection of artificial intelligence, data, and full-stack engineering. I enjoy turning complex ideas into useful, reliable products.
          </p>
          <div className="location">Based in Bengaluru, India</div>
        </section>

        <div className="content-grid">
          <section className="content-section">
            <h2 className="section-title">
              <FaGraduationCap className="icon" />
              <span>Education</span>
            </h2>
            <div className="section-content">
              <p>B.Tech in Artificial Intelligence &amp; Machine Learning</p>
              <p>MIT-WPU, Pune · 2026</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <FaCode className="icon" />
              <span>Focus</span>
            </h2>
            <div className="section-content">
              <p>Applied AI &amp; machine learning</p>
              <p>Data systems &amp; full-stack development</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <FaTrophy className="icon" />
              <span>Achievements</span>
            </h2>
            <div className="section-content">
              <p>NEXUS Hackathon - 2nd Runner Up</p>
              <p>SIH&apos;24 DRDO Runner Up</p>
              <p>Xylem Hackathon Finalist</p>
            </div>
          </section>
        </div>

        <p className="exploring">
          <span>Currently exploring</span> LLMs, applied ML, full-stack systems, and cybersecurity.
        </p>
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
          color: var(--text-primary);
          background-color: var(--accent-soft);
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
          border-left: 2px solid var(--accent);
          padding: 1rem 0 1rem 1.5rem;
          margin: 4rem 0 3rem;
          max-width: 820px;
        }
        .eyebrow {
          color: var(--accent);
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          margin-bottom: 1rem;
        }
        .intro h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.6rem);
          letter-spacing: -0.06em;
          line-height: 1.1;
          max-width: 760px;
          color: var(--text-primary);
        }
        .intro p {
          margin: 1.4rem 0 0;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 670px;
        }
        .location {
          color: var(--accent-strong);
          font-size: 0.82rem;
          font-weight: 700;
          margin-top: 1.4rem;
        }
        .about-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .content-section {
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .section-title {
          margin-top: 0;
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .section-title .icon {
          color: var(--accent);
          font-size: 1rem;
        }
        
        .section-content p {
          margin: 0 0 0.6rem 0;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.86rem;
        }
        
        .section-content p:last-child {
          margin-bottom: 0;
        }
        .exploring {
          border-top: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.8;
          margin: 3.5rem 0 1rem;
          padding-top: 1.25rem;
        }
        .exploring span {
          color: var(--accent);
          font-weight: 700;
          margin-right: 0.65rem;
        }
        @media (max-width: 640px) {
          .about-page { padding: 16px; }
          .navbar { align-items: flex-start; gap: 1rem; }
          .menu { flex-wrap: wrap; gap: 0.25rem; justify-content: flex-end; }
          .intro { margin-top: 2.5rem; padding-left: 1rem; }
        }
      `}</style>
    </div>
  );
}
