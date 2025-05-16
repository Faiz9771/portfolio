import Link from 'next/link';

export default function Menu() {
  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="menu">
      <h2>MENU</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} legacyBehavior>
              <a className="menu-link">
                <span>{item.name}</span> <span className="arrow">›</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .menu-link {
          text-decoration: none;
          color: var(--text-primary);
          display: block;
          transition: color 0.3s ease;
        }
        .menu-link:hover {
          color: var(--text-primary);
          opacity: 0.8;
        }
        .arrow {
          color: var(--text-secondary);
        }
      `}</style>
    </nav>
  );
}
