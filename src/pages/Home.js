import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "../bulma/bulma/css/bulma.css";
import "../index.css";

const Home = () => {
  return (
    <div classNameName="">
      <MainNavbar></MainNavbar>
      <section className="section is-medium">
        <h1 className="title">Bem vindo ao meu caderno de estudos</h1>
        <h2 className="subtitle">
          Um local para eu consultar minhas anotações, e demonstrar meus
          interesses
        </h2>
      </section>
      <p>
        Esta é a sua página inicial. Para ver o roadmap, clique no link abaixo:
      </p>
      <Link to="/roadmap">Ver Roadmap</Link>
      {/* Outros conteúdos da página inicial podem ser adicionados aqui */}

      <div className="box mybox">
        <div className="columns">
          <div className="column is-8 maincol commomMargin">
            is-two-thirds <br></br> teste{" "}
          </div>
          <div className="column is-3 maincol commomMargin">Auto</div>
        </div>
      </div>
      <div className="mybox">
        <aside class="menu">
          <p class="menu-label">Linguagens de programação</p>
          <ul class="menu-list">
            <li>
              <a>WEB (HTML, CSS e JS)</a>
            </li>
            <li>
              <a>Python</a>
            </li>
          </ul>
          <p class="menu-label">Frameworks</p>
        </aside>
      </div>
      <div className="box mybox">
      <div class="content is-large">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{" "}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Home;
