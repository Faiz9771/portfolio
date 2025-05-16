'use client';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

export default function Card() {


  return (
    <>
      <div className="page-container">
        <div className="card">
          {/* Theme Toggle */}
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>

          <Header />
          <Menu />
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .card {
          transition: transform 0.2s ease;
          --cursor-color: var(--text-primary, #000);
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20'><circle cx='10' cy='10' r='5' fill='" + "black" + "'/></svg>") 5 5, auto;
          position: relative;
        }
        
        :global(.dark) .card {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20'><circle cx='10' cy='10' r='5' fill='white'/></svg>") 5 5, auto;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .theme-toggle-container {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
