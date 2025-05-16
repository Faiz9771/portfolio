import { FaBuilding } from 'react-icons/fa';

export default function Header() {
    return (
      <header className="mb-8 text-white font-mono">
        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
        <FaBuilding style={{ marginRight: 6, fontSize: '14px', color: '#777' }} />
          <span>Pune, India</span>
        </div>
        <h1 className="font-bold text-2xl mb-1">Faiz Memon</h1>
        <p className="text-zinc-400" style={{ fontSize: '0.75rem' }}>
  AI & ML | MERN | Cybersecurity | Data Science
</p>
      </header>
    );
  }
  