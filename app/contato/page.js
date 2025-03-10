
'use client'
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function Contato(){

    const [ nome, alterarNome] = useState("")
    const [ mensagem, alterarMensagem] = useState("")

   
    function enviarMensagem(e){

        e.preventDefault()
        
        if (nome === "" || mensagem === "") {
            toast.error("Por favor, preencha todos os campos.");
        } else {

           toast.success("Mensagem enviada com sucesso")}

        

        
    }
    return(
        <div>
        
            <h1>Página de contato</h1>
            <p> Entre em contato conosco.</p>

            <hr/>

            <form onSubmit= {(e)=> enviarMensagem(e)}>

                <label>
                    Digite seu nome:
                    <input onChange={(e)=> alterarNome(e.target.value)}/>
                </label>

                <br/>

                <label>
                    Digite sua mensagem:
                    <input onChange={(e)=> alterarMensagem(e.target.value)}/>
                </label>

                <br/>

                <button>Enviar</button>
                
            </form>
            <ToastContainer/>
                
         </div>
    )

}