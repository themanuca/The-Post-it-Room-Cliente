import React, {useState, useEffect} from "react";
import { Container,Content,Alermsg } from "./styles";
import api from '../../../services/api';
import axios from "axios";


export default function Home(){

    var url = "http://localhost:5000";

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[msg, setMsg] = useState();

    async function login(e){
        e.preventDefault();

        const data = {
            email_user:email, 
            senha_user:senha, 
        } 
   

        const response = await api.post(url + '/api/user/login',data)
        
        localStorage.setItem("token", response.data.token)
        var userID = response.data.userid;
        // var a =  window.location.href= url + "/dashboard/" + userID;

            if(response.status === 200){
                axios.get("http://localhost:5000/dashboard/"+userID,{
                    
                    headers:{
                        "authorization":localStorage.getItem("token")

                    }
               
                })
           
            }else if (response.status === 299){

                setMsg(response.data.msg)
            }
            else {
                alert('ERRO NO SERVIDOR')
            }

       
    }

    var pad = 0;
    useEffect(()=>{
        var pad = 1;
    },[msg])
    



    return(
        <Container>
            <Content>
            <Alermsg tlerro ={pad}>{msg}</Alermsg>

                <h2>Entrar</h2>
                <form >
                    
                    <div className="field">
                        <label><span>Email</span></label>
                        <input  
                        type="email" 
                        name='email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}required
                        required
                        autoComplete="email"
                        />
                    </div>

                    <div className="field">
                        <label><span>Password</span></label>
                        <input 
                        type="password" 
                        name='password'
                        value={senha}
                        onChange={e=>setSenha(e.target.value)}required
                        required
                        autoComplete="current-password"
                        />
                    </div>
                
                    <input 
                    type="submit" 
                    value='Enviar' 
                    onClick={login}/>
                </form>
            </Content>
        </Container>
    )
}