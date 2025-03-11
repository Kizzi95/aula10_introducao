'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz() {

        const [p1, alterarP1] = useState(0)
        const [p2, alterarP2] = useState(0)
        const [p3, alterarP3] = useState(0)
        const [p4, alterarP4] = useState(0)
        const [total, alterarTotal] = useState(0)

        const [ selecionado, alteraSelecionado] = useState(["","","",""])


    function calculadoraTotal(){
        alterarTotal(p1+p2+p3+p4)
    }    

    function verificarFilme(e){
        if( e.target.valeu == "Procurando Nemo"){
            alterarP4(1);
        } else{
            alterarP4(0)
        }
    }


    return ( 
        <div>  

            <h1>Quiz Kzzi</h1>
            <br/>
            <p> Assina-le a opção correta!</p>

            <hr/>

            <h2>Qual a cor do cavalo branco do Napoleâum?</h2>
            <label> <input type= "radio" /> Preto</label>
            <br/>
            <label> <input type= "radio" /> Azul</label>
            <br/>
            <label> <input type= "radio" /> Branco</label>
            <br/>
            <label> <input type= "radio" /> Transparente</label>
            <br/>


            <hr/>

            <h2> Qual é a melhor letra?</h2>
            <label><input name = "p2" type="radio" onClick={()=> alterarP2(O)} /> A</label>
            <br/>
            <label><input name = "p2" type="radio" onClick={()=> alterarP2(O)} /> B</label>
            <br/>
            <label><input name = "p2" type="radio" onClick={()=> alterarP2(O)} /> C</label>
            <br/>
            <label><input name = "p2" type="radio" onClick={()=> alterarP2(1)} /> X</label>
            <br/>

            <hr/>

            <h2> Quanto é dois + 2 ?</h2>                                                               
            <ul>
               
                <li className={selecionado[0]} onClick={()=> {alterarP1(1); alteraSelecionado(["selecionado","","",""]) } } > 2 </li>
                <li className={selecionado[1]} onClick={()=> {alterarP1(0); alteraSelecionado(["","selecionado","",""]) } } > 0 </li>
                <li className={selecionado[2]} onClick={()=> {alterarP1(0); alteraSelecionado(["","","selecionado",""]) } }> aa </li>
                <li className={selecionado[3]} onClick={()=> {alterarP1(0); alteraSelecionado(["","","","selecionado"]) } }> sim </li>

            </ul>

            <hr/>

            <h2>Qual melhor filme da Disney?</h2>
            <input onChange={(e)=> verificarFilme(e)}/>

            <button onClick={(e)=> calculadoraTotal()}> Enviar resposta</button>

            <p> Total de pontos:{total} </p>

        </div>
    );
}

export default Quiz;