import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
      <style jsx>{`
        .theme-toggle {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          width: 36px;
          height: 36px;
        }
        
        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .light .theme-toggle {
          color: #000;
        }
        
        .light .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
