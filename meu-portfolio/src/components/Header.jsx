import React from 'react';

const navList = [
  { id: 1, data: "Início" },
  { id: 2, data: "Projetos" },
  { id: 3, data: "Skills" },
  { id: 4, data: "Educação" },
  { id: 5, data: "Contato" }
];

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header-logo">Isis Estevan</a>
      <nav>
        {navList.map((item) => (
          <a key={item.id} href="#" className="nav-link">{item.data}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
