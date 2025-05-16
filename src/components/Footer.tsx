import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperclip } from "react-icons/fa";

export default function Footer() {
  const [showLogos, setShowLogos] = useState(false);
  const iconSize = 15; // Uniform icon size

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        position: "relative",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Paperclip Icon (hidden when logos shown) */}
      {!showLogos && (
        <div
          onClick={() => setShowLogos(true)}
          style={{ cursor: "pointer", display: "inline-flex" }}
          aria-label="Open social links"
        >
          <FaPaperclip size={iconSize} />
        </div>
      )}

      {/* Sliding logos container */}
      <div
        className={`social-logos-container ${showLogos ? "slide-in" : "slide-out"}`}
        style={{
          display: "flex",
          gap: "2rem",
          color: "#ff79c6", // your pink color
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          height: iconSize,
        }}
      >
        <a
          href="https://www.linkedin.com/in/faiz9771/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: "#777", display: "inline-flex" }}
          onClick={() => setShowLogos(false)} // Optional: close on click
        >
          <FaLinkedin size={iconSize} />
        </a>
        <a
          href="https://github.com/Faiz9771"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: "#777", display: "inline-flex" }}
          onClick={() => setShowLogos(false)}
        >
          <FaGithub size={iconSize} />
        </a>
        <a
          href="https://www.instagram.com/faiz_9771/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: "#777", display: "inline-flex" }}
          onClick={() => setShowLogos(false)}
        >
          <FaInstagram size={iconSize} />
        </a>
      </div>

      {/* Version text */}
      <div
        className="version"
        style={{ marginLeft: "auto", marginRight: "1rem", color: "#77b" }}
      >
        v4.0
      </div>

      <style jsx>{`
        .social-logos-container {
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
        }
        .slide-in {
          animation: slideIn 0.4s forwards;
          pointer-events: auto;
          opacity: 1;
        }
        .slide-out {
          animation: slideOut 0.4s forwards;
          pointer-events: none;
          opacity: 0;
        }
        @keyframes slideIn {
          0% {
            transform: translateX(-50%) translateX(0) translateX(-40px);
            opacity: 0;
          }
          100% {
            transform: translateX(-50%) translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateX(-50%) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateX(-40px);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
