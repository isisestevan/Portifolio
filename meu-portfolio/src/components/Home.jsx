import React from "react";
import ProfileImage from "../assets/git-profile.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img src={ProfileImage} alt="GitProfile" className="rounded-full w-48 sm:w-64 md:w-80 lg:w-[380px] xl:w-[480px] shadow-lg 
        hover:scale-110 transition duration-300"/>
      </div>

      <div className="md: w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Oi, aqui é a <span className="text-green-900">Isis</span></h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Sou <span className="text-green-900">
            
            <TypeAnimation
            sequence={
              ["Cientista da Computação",1000,
              "Dev FullStack",1000,
              "Entusiasta de Machine Learning",1000
            ]
            } 

            speed={50}
            style={{fontSize: "lre"}}
            repeat={Infinity}
            
            />
            </span></h3>
        <p className="text-sm sm:text-lg mb-6">Sou dev Fullstack, formada em Ciência da Computação pela Universidade de Itaúna, 
          e sou fascinada por Machine Learning. Quando não tô codando, tô na cozinha testando receitas, 
          maratonando filmes (time Marvel) ou curtindo a natureza pra dar aquela equilibrada. 
          Gosto de resolver problemas com tecnologia e criar soluções que realmente fazem a diferença. 
          Ah, e se tem IA no meio, já ganhou minha atenção!  </p>
      </div>
    </section>
  );
};

export default Home;
