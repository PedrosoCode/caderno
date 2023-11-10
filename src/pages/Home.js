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
            <a>Dashboard</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
        </ul>
      </aside>
      </div>
    </div>
  );
};

export default Home;
