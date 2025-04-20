import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            Oi, aqui é a <span className="highlight-name">Isis</span>
          </h1>
          <h3 className="home-subtitle">
            Sou{" "}
            <span className="highlight">
              <TypeAnimation
                sequence={[
                  "Cientista da Computação.",
                  1000,
                  "Dev FullStack.",
                  1000,
                  "Entusiasta de Machine Learning.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h3>
        </div>

        <div className="skills-icons">
          <div className="icon" id="typescript">
            <i className="devicon-typescript-plain"></i>
          </div>
          <div className="icon" id="js">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="icon" id="html">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="icon" id="css">
            <i className="devicon-css3-plain"></i>
          </div>
          <div className="icon" id="csharp">
            <i className="devicon-csharp-plain"></i>
          </div>
          <div className="icon" id="python">
            <i className="devicon-python-plain"></i>
          </div>
          <div className="icon" id="git">
            <i className="devicon-git-plain"></i>
          </div>
        </div>

        <div className="scroll-down">
          <i className="fa fa-chevron-down"></i>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
