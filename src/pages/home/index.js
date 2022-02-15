import React from "react";
import { Navgation, Title, Lista, Description, AreaPost, Ctn, GlobalStyle } from "./styles";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import Button from "../../components/btn/index"
import api from "../../services/api";
import Card from "../../components/card";
import Cores from "../../components/cores/index"
import { set } from "mongoose";
const Home = () =>{

  
    const [digitado, setDigitado] = useState(""); // Valor digitado no textarea
    const [cardPost, setCardpost] = useState([]); //Recebe os dados que são puxado do banco
    const [check, setCheck ] = useState(""); // Recebe o valor das cores do postit, escolhido pelo o user.
    const [ disableCor, setDisableCor]=useState("")//Permite que apenas uma cor por vez seja clicada
    
    
    var url = "http://localhost:5000"


    // Função async para enviar os dados para a rota - POST
    async function handleSubmit(){
        if(digitado.length  >= 10){
            const data = {
                post_texto:digitado,
                post_cor:check
            }
            
            const response = await api.post(url+'/api/post',data);
    
            if(response.status == 200){
                window.location.href ='/'
            }else{
                alert('NÃO FOI')
          
            }

        }else{
            alert('Tem que ter no minímo 10 caracteres')
        }
        
    }
    
    //Função para PUXAR os dados do banco - GET/FIND
    useEffect(()=>{
        async function carregaPost(){
            const response = await api.get(url+"/");
            setCardpost(response.data.reverse())
        }
        carregaPost();
    },[])

    // Função para controlar o LIMITE DE CARACTERES
    var v = digitado.length
    if(v == 150){
        var limite = "red"
        var msg = "Limite de caracteres alcançado"
    }

    async function CorCheck(e){
         setCheck(e.target.value)
        await setDisableCor("true")

        var tst = document.querySelector(`[value=` + `"${e.target.value}"]`)
       
        console.log(tst)
       

    }

    return(
        <div> 
            <div className="fate">  {/* ESSE FATE, ESTA NO CSS DA PASTA DOS CARDS */}
                <GlobalStyle/>  
                <header className="header">
                    
                    <Navgation>
                        <Title>< Link to="/">The Post-it Room</Link></Title>
                        <Lista>
                            <li> <Link to="/login">Login</Link></li>
                            <li> <Link to="/register">Register</Link></li>
                        
                        </Lista>
                    </Navgation>
                </header>

                <Description> Faça sua anotação importante  </Description>
                <div>
                    <AreaPost>
                        <textarea  
                        minLength="10" 
                        maxLength="150"
                        value={digitado}
                        onChange={e=>setDigitado(e.target.value)}
                        >
                        </textarea>
                        <p className="corP" style={{color:limite}}>{digitado.length}/150</p>
                        <p style={{color: limite}}>{msg}</p>
                    </AreaPost>
                </div>


                <Cores onChange={CorCheck} disabled={disableCor}/>


                <Button onclick={handleSubmit} texto="Enviar"/>
            </div>
           

                <Ctn>
                    {cardPost.map((item)=>(
                        
                        <Card key={item._id}   cor={item.post_cor} texto={item.post_texto}/>
                        
                    ))}

                    
                </Ctn>
            
           
        
        
        </div>
    )

}



export default Home