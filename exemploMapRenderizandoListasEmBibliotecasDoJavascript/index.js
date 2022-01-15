/** Renderizando listas em bibliotecas do JavaScript */
/** https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-pt */
import React from "react";
import ReactDOM from "react-dom";

const nomes = ['João','Vitor','Matheus','Carlos'];

const listaNomes = () => (
    <div>
        <ul>{nomes.map(nome =>  <li key={nome}> {nome}  </li>)}</ul>
    </div>
);

const elementoRaiz = document.getElementById("raiz");
ReactDOM.render(<listaNomes/>, elementoRaiz);