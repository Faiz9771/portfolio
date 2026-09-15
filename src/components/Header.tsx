import { FaBuilding } from 'react-icons/fa';

export default function Header() {
    return (
      <header className="header mb-8 font-mono">
        <div className="location">
        <FaBuilding style={{ marginRight: 6, fontSize: '14px', color: 'var(--accent)' }} />
          <span>Bengaluru, India</span>
        </div>
        <h1 className="font-bold text-2xl mb-1">Faiz Memon</h1>
        <p style={{ fontSize: '0.75rem' }}>
  AI & ML | Data Science | MERN | Software Development
</p>
      </header>
    );
  }
