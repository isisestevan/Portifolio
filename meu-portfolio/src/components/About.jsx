import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">Sobre</h2>
      <p className="about-description">
        Aqui você vai encontrar mais informações sobre mim, o que faço e as minhas principais habilidades em tecnologia e programação.
      </p>

      <div className="about-content">
        {/* Descrição */}
        <div className="about-box">
          <h3 className="about-subtitle">Quem sou eu?</h3>
          <p>
            Sou uma Desenvolvedora Fullstack formada em Ciência da Computação pela Universidade de Itaúna, apaixonada por Machine Learning e soluções inteligentes. Construo aplicações web que resolvem problemas de forma eficiente e impactante.
          </p>
          <p>
            Além do código, também gosto de compartilhar conhecimento sobre tecnologia e inteligência artificial, ajudando a comunidade dev a crescer. Quando não estou programando, estou na cozinha testando receitas, maratonando filmes (time Marvel!) ou aproveitando a natureza para equilibrar tudo.
          </p>
          <p>
            Estou aberta a oportunidades onde eu possa aprender, crescer e contribuir com minhas habilidades. Se tiver algo que combine comigo, não hesite em entrar em contato!
          </p>
        </div>

        {/* Skills */}
        <div className="about-box">
          <h3 className="about-subtitle">Minhas Skills</h3>
          <div className="skills-grid">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Angular",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Python",
              "Machine Learning",
              "Git",
              "Docker",
            ].map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
