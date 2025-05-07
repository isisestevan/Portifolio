import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/isisestevan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/isisestevan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Isis Estevan. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
