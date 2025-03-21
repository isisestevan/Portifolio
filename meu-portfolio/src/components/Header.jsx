import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import "../styles/header.css";

const navList = [
  { id: 1, data: "Início" },
  { id: 2, data: "Projetos" },
  { id: 3, data: "Skills" },
  { id: 4, data: "Educação" },
  { id: 5, data: "Contato" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para detectar mudanças no tamanho da tela e fechar o menu se a tela for maior que 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false); // Fecha o menu quando a tela for maior que 768px
      }
    };

    // Adiciona o listener de resize
    window.addEventListener("resize", handleResize);

    // Remove o listener quando o componente for desmontado
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
