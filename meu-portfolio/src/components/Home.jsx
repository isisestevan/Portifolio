import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <section className="home-section">
      {/* <div className="md:w-1/2 flex justify-center">
        <img src={ProfileImage} alt="GitProfile" className="profile-image" />
      </div> */}

      <div className="home-text">
        <h1 className="home-title">
          Oi, aqui é a <span className="highlight">Isis</span>
        </h1>
        <h3 className="home-subtitle">
          Sou <span className="highlight">
            <TypeAnimation
              sequence={[
                "Cientista da Computação", 1000,
                "Dev FullStack", 1000,
                "Entusiasta de Machine Learning", 1000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="home-description">
        Sou uma Desenvolvedora Fullstack formada em Ciência da Computação pela Universidade de Itaúna, apaixonada por Machine Learning e soluções inteligentes. Construo aplicações web que resolvem problemas de forma eficiente e impactante.

Além do código, também gosto de compartilhar conhecimento sobre tecnologia e inteligência artificial, ajudando a comunidade dev a crescer. Quando não estou programando, estou na cozinha testando receitas, maratonando filmes (time Marvel!) ou aproveitando a natureza para equilibrar tudo.

Estou aberta a oportunidades onde eu possa aprender, crescer e contribuir com minhas habilidades. Se tiver algo que combine comigo, não hesite em entrar em contato!
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
