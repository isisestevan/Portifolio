import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import "../styles/header.css";

const navList = [
  { id: 1, data: "Início" },
  { id: 2, data: "Sobre" },
  { id: 3, data: "Projetos" },
  { id: 4, data: "Contato" }
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
          <a key={item.id} href="#" className="nav-link">
            {item.data}
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
