'use client'

import { useState } from "react";
import "./home.css"



export default function Home() {



  let [carrinho, setCarrinho] = useState(0)

  function removerCarinho() {
    if (carrinho > 0) {
      setCarrinho(carrinho - 1)
    }
  }

  return (
    <div>


      <h1> Conradito Market</h1>
      <p>O melhor supermercado do bairro</p>
      <hr />
      <br />

      <p className="carrinho"> Itens no carinho:{carrinho}</p>
      <button onClick={() => removerCarinho()}>Remover item</button>
      <br />

      <button onClick={() => setCarrinho(0)}>Limpar carrinho</button>
      <hr />



      <h2>Produtos</h2>
      <hr />

      <div className="produto">
        <img src="https://placehold.co/150" />
        <p>Cenoura</p>
        <p>R$4,50 (kg)</p>
        <button onClick={() => setCarrinho(carrinho + 1)}>Comprar</button>


      </div>



    </div>



  );
}
