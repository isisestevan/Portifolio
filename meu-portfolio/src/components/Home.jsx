import React from "react";
import ProfileImage from "../assets/git-profile.png";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <section className="home-section">
      <div className="md:w-1/2 flex justify-center">
        <img src={ProfileImage} alt="GitProfile" className="profile-image" />
      </div>

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
          Sou dev Fullstack, formada em Ciência da Computação pela Universidade de Itaúna, 
          e sou fascinada por Machine Learning. Quando não tô codando, tô na cozinha testando receitas, 
          maratonando filmes (time Marvel) ou curtindo a natureza pra dar aquela equilibrada. 
          Gosto de resolver problemas com tecnologia e criar soluções que realmente fazem a diferença. 
          Ah, e se tem IA no meio, já ganhou minha atenção!
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
