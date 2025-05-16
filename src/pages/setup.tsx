import Link from 'next/link';
import { FaLaptop, FaMobile, FaBrain, FaMouse } from 'react-icons/fa';

export default function Setup() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contact', path: '/contact' }
  ];

  const setupItems = [
    {
      id: 1,
      title: 'MacBook Air M2',
      icon: <FaLaptop className="setup-icon" />,
      description: 'My primary workhorse for development and design',
      specs: [
        'Apple M2 Chip with 8-core CPU',
        '8GB Unified Memory',
        '256GB SSD Storage',
        '13.6-inch Liquid Retina Display',
        'Up to 18 hours battery life'
      ],
      image: 'https://i0.wp.com/sixcolors.com/wp-content/uploads/2022/06/m2air-hero-6c.png?ssl=1'
    },
    {
      id: 2,
      title: 'iPhone 16 Pro',
      icon: <FaMobile className="setup-icon" />,
      description: 'My daily driver for communication and mobile productivity',
      specs: [
        'A17 Pro chip with 6-core GPU',
        '6.1-inch Super Retina XDR display',
        'Pro camera system with 48MP',
        'Titanium design with Ceramic Shield',
        'USB-C connectivity'
      ],
      image: 'https://llounge.in/wp-content/uploads/2024/09/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium_AV1-removebg-preview.png'
    },
    {
      id: 3,
      title: 'Logitech Pebble',
      icon: <FaMouse className="setup-icon" />,
      description: 'Slim, silent, and portable mouse for work on the go',
      specs: [
        'Ultra-slim, pebble shape',
        'Silent clicking',
        'Bluetooth or USB receiver',
        '18-month battery life',
        'Multi-device support'
      ],
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681401112/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/220432_0_kwd7sf.png?tr=w-600'
    },
    {
      id: 4,
      title: 'The Brain',
      icon: <FaBrain className="setup-icon" />,
      description: 'The most important tool in my setup',
      specs: [
        'Constantly learning and adapting',
        'Creative problem-solving',
        'Attention to detail',
        'Passion for technology',
        'Never stops improving'
      ],
      image: 'https://www.transparentpng.com/download/brain/ZZfBej-brain-picture.png'
    }
  ];

  return (
    <div className="setup-page">
      <nav className="navbar">
        <Link href="/" legacyBehavior>
          <a className="back-button" aria-label="Back to Home">&larr; Back</a>
        </Link>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} legacyBehavior>
                <a className={`menu-link ${item.name === 'Setup' ? 'active' : ''}`}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="setup-content">
        <h1 className="page-title">Setup</h1>
        <p className="setup-intro">
          Here&apos;s the tech I currently use for my daily work and development.
        </p>

        <div className="setup-grid">
          {setupItems.map((item) => (
            <div key={item.id} className="setup-item">
              <div className="setup-item-content">
                <div className="setup-item-header">
                  <div className="setup-icon">
                    {item.icon}
                  </div>
                  <h2>{item.title}</h2>
                </div>
                <p className="setup-description">{item.description}</p>
                <div className="setup-specs">
                  <ul>
                    {item.specs.map((spec, index) => (
                      <li key={index}>
                        <span className="spec-bullet">•</span>
                        <span className="spec-text">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="setup-item-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="setup-image"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .setup-page {
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
        .setup-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .page-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .setup-intro {
          color: var(--text-secondary);
          margin: 0 0 3rem 0;
          line-height: 1.6;
          max-width: 600px;
        }

        .setup-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .setup-item {
          display: flex;
          background: var(--card-bg);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .setup-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .setup-item-content {
          flex: 1;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        .setup-item-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .setup-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--hover-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: var(--text-primary);
          font-size: 1.2rem;
        }

        .setup-item h2 {
          margin: 0;
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .setup-description {
          color: var(--text-secondary);
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .setup-specs ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .setup-specs li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 8px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .spec-bullet {
          color: var(--text-primary);
          margin-right: 10px;
          font-weight: bold;
        }

        .setup-item-image {
          width: 250px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .setup-image {
          max-width: 100%;
          max-height: 180px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .setup-item {
            flex-direction: column-reverse;
          }
          
          .setup-item-image {
            width: 100%;
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
          }
          
          .setup-item-content {
            padding: 20px;
          }
          
          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}