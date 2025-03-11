'use client'

import { useState } from "react";
import "./painel.css"

function Painel() {

    const [ usuario, alterarUsuario] = useState("Lorena")
    const [ senha, alterarSenha] = useState("Bta12")

    const [ mostraErro, alteraMostraErro] = useState(false)


    function entrar (){

        
    

        if (usuario == "Lorena" && senha == "Bta12"){
            alteraMostraErro (false)
        } else{
            alteraMostraErro (true)
        }
    }
    return (  

        <div>
            <h1> PainelAdministrativo</h1>
            <br/>

            <label>
                Digite o usuário:
                <input onChange={(e)=> alterarUsuario(e.target.value)}/>

            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={(e)=> alterarSenha(e.target.value)}/>

            </label>

            <br/>

            <button onClick={ ()=> entrar()}>Entrar</button>    

                {
                    mostraErro == true ?
                        <div className= "erro">
                            <p>Usuário ou senha incorretos</p>
                        </div>
                    :
                        <div ></div>
                }
                {    
                    mostraErro == false ?
                        <div className= "correto">
                             <p>Usuário ou senha incorretos</p>
                        </div>
                    :
                        <div ></div>

                }

        </div>
    );
}

export default Painel;