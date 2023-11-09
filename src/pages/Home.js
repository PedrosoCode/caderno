import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import '../bulma/bulma/css/bulma.css'
import '../index.css'

const Home = () => {
  return (
    <div className=''>
        <MainNavbar></MainNavbar>
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>
        Esta é a sua página inicial. Para ver o roadmap, clique no link abaixo:
      </p>
      <Link to="/roadmap">Ver Roadmap</Link>
      {/* Outros conteúdos da página inicial podem ser adicionados aqui */}
    </div>
  );
};

export default Home;
