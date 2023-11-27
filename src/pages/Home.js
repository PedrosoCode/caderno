import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";  // Corrigido o nome do componente
import "../bulma/bulma/css/bulma.css";
import "../index.css";

const Home = () => {
  return (
    <div className="mainHomeBg"> {/* Corrigido o nome da classe */}
      <MainNavbar />
      <div className="section">
        <div className="box MyBox">
          <div className="content is-large"> {/* Corrigido o nome da classe */}
            <h1>Bem-vindo ao meu caderno de estudos</h1>
            <p>
              Atualmente, meu foco Principal está sendo em Ciência de dados,
              utilizando python. Adquiri esse interesse após comprar o livro
              Dara Science do zero, noções fundamentais com <br /> <br />
              "inserir foto da capa" <br /> <br />
            </p>
            <h2>Múltiplos Assuntos</h2>
            <p>
              Pretendo adicionar a mais variada gama de conteudos na área de DS
              neste site, servindo tanto como portfolio como caderno pessoal,
              Abaixo utilize o menu para os diferentes tópicos
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="box MyBox">
      <MainMenu /> {/* Corrigido o nome do componente */}
      </div></div>
      <Footer />
    </div>
  );
};

export default Home;
