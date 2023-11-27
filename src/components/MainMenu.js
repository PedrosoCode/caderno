import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <aside class="menu">
      <p class="menu-label">Data Science</p>
      <ul class="menu-list">
        <li>
        <Link to="/DataIntro">Introdução</Link>
        </li>
      </ul>
      <p class="menu-label">Linguagens Específicas</p>
      <ul class="menu-list">
        <li>
          <a>Em breve (in a galaxy, far far away)</a>
        </li>
      </ul>
      <p class="menu-label">FrameWorks</p>
      <ul class="menu-list">
        <li>
          <a>React Em breve (in a galaxy, far far away)</a>
        </li>
      </ul>
      <p class="menu-label">Linux</p>
      <ul class="menu-list">
        <li>
          <a>Ubuntu Em breve (in a galaxy, far far away)</a>
        </li>
        <li>
          <a>Kali Em breve (in a galaxy, far far away)</a>
        </li>
      </ul>
    </aside>
  );
};

export default MainMenu;
