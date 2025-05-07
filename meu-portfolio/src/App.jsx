import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="body">
        <div className="bg-custom-light">
          <Header />
          <section id="inicio">
            <Home />
          </section>
        </div>

        <section id="sobre">
          <About />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="contato">
          <Contact />
        </section>

        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
