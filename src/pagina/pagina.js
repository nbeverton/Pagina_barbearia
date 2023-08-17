import React from "react";
import Topo from "../componente/topo";

import './home-style.css';

function Home () {
    return(
    <main>
        <div className="banner-container"> 
            <img className="banner" src="./assets/banner-barbearia.jpg"/>
        </div>
        
        <div className="texto">
            <h1>Bem vindo ao Barber Shop</h1>
            <h2>Nossa barbearia sempre oferece profissionais de alta qualidade e estamos prontos para lidar com as suas maiores expectativas.</h2>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal! Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e nunca fique desapontado!</p>
            <span>S. Kelly</span>
        </div>
    </main>    

    );
}

export default Home;