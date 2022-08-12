import React from "react";
import imageSobre from "../Assets/Images/moldura.svg"
// import portPhoto from "../Assets/Images/portfolio.png"
function Sobre(props) {
    return (
        <div id="sobre_container">
            <div className="sobre_card">
                <h2>BEM VINDO</h2>
                <p>Olá, me chamo Eduardo, resido na cidade de Pelotas - RS, lido com desenvolvimento web há um ano,
                    e sempre fui fascinado por programação.</p>
                <br />
                <br />
                <br />
                <p>Desenvolvo Apps completos desde o Design até o back end, normalmente utilizando 
                    MERN(MongoDB, Express, React, Node) para desenvolver meus projetos. Atualmente estudo Análise
                    e Desenvolvimento de Sistema na Instituição de Ensino Anhanguera, e trabalho com alguns Freelancer no desenvolvimento de sites.</p>
                {/* <p> Olá, me chamo Eduardo Leitzke Pinto, tenho 27 anos e resido na cidade de Pelotas.
                Lido com desenvolvimento web há um ano, e sempre fui fascinado por programação. 
                Estudei até o quarto semestre do curso de Ciência da Computação da Universidade Federal de Pelotas 
                onde não me encontrei como programador, porém depois de descobrir Javascript tudo mudou! A ideia de poder 
                criar algo visual foi incrível. Desenvolvo Apps completos desde o Design até o back end, normalmente util
                izando MERN(MongoDB, Express, React, Node) para desenvolver meus projetos. Atualmente estudo Análise
                e Desenvolvimento de Sistema na Instituição de Ensino Anhanguera, e trabalho com alguns Freelancer no desenvolvimento de sites.</p> */}

            </div>

            {/* <div className="imagem_pessoal">
                <img  src={imageSobre} alt="" />              
            </div> */}
        </div>
    )
}


export default Sobre