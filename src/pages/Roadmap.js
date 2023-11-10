import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import "../bulma/bulma/css/bulma.css";
import "../index.css";

const Roadmap = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <section className="section is-medium">
        <h1 className="title">Roadmaps</h1>
        <h2 className="subtitle">
          tópicos, milestones e interesses <br></br>
          This a way, to Keep track of my Progress <br></br> <br></br>
          <Link to="/">-Retornar para a Home</Link>
        </h2>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Roadmap;
