import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import "../bulma/bulma/css/bulma.css";  // Corrigido o caminho aqui
import "../index.css";

const DataIntro = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <section className="section is-medium">
        <h1 className="title">DataIntros</h1>
        <h2 className="subtitle">
          tópicos, milestones e interesses <br></br>
          This a way, to Keep track of my Progress <br></br> <br></br>
          <Link to="/">-Retornar para a Home</Link>
        </h2>
        <Footer></Footer>
      </section>
      <div className="box mybox">
        <div className="content is-large">  {/* Corrigido a propriedade class para className aqui */}
          <h1>Hello World</h1>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{" "}
            blandit. Quisque condimentum maximus mi, sit amet commodo arcu
            rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse
            potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
            dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>
              Aliquam nec felis in sapien venenatis viverra fermentum nec
              lectus.
            </li>
            <li>Ut non enim metus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataIntro;
