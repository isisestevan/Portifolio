import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import "../styles/header.css";

const navList = [
  { id: 1, label: "Início", href: "#inicio" },
  { id: 2, label: "Sobre", href: "#sobre" },
  { id: 3, label: "Projetos", href: "#projetos" },
  { id: 4, label: "Contato", href: "#contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-logo-container">
        <div className="header-logo">
          <img src={profileImg} alt="Perfil" className="profile-image" />
        </div>
        <span className="name-logo">Isis Estevan</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {navList.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "×" : "☰"}
      </button>
    </header>
  );
};

export default Header;
