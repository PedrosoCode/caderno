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
      <div className="box mybox">
        <div class="content is-large">
          <h1>Hello World</h1>
          <p>
            Muitas são as disponíveis técnologias no mercado, portanto fica
            difícil me organizar para testar algumas marcar progresso, sendo
            assim bolei a ídeia de montar um roadmap inspirado <a></a> por este site aqui  
          </p>
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

export default Roadmap;
