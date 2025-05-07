import React from "react";
import "../styles/contact.css";

const Contato = () => {
  return (
    <section className="contato-section">
      <h2 className="contato-title">Contato</h2>
      <p className="contato-description">
        Tem alguma ideia, oportunidade ou só quer bater um papo? Me mande uma mensagem!
      </p>

      <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>

    </section>
  );
};

export default Contato;
