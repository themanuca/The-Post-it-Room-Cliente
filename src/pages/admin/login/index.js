import React, {useState, useEffect, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container,Content,Alermsg } from "./styles";
import api from '../../../services/api';
import axios from "axios";
//require("dotenv/config");


import { AuthContext } from "../../../components/contexts/auth";

export default function Home({children}){
    var url = process.env.REACT_APP_API_URL;
    console.log(url+ "URL ENV");

    const navigate = useNavigate();

    const {authenticated, Logar} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[msg, setMsg] = useState();

    
 
    async  function Login(e){
        e.preventDefault();
        console.log('btn clicado, erro abaxio')
        const data = {
            email_user:email, 
            senha_user:senha, 
        } 
        
     
        const response = await api.post(url + '/user/login',data)
        
        localStorage.setItem("token", response.data.token)
        var userID = response.data.userid;
        const token = response.data.token
        const emailession = response.data.email;

        // const dadosUser = {
        //     id:userID,
        //     emailUser:emailession,
        // };

        //localStorage.setItem("dataUser", JSON.stringify(dadosUser));
        //console.log( response.data.userid)
        
        api.defaults.headers.Authorization = `Bearer ${token}`;
       

            if(response.status === 200){
                
                Logar(email, senha,userID, token);
              

               navigate("/dashboard/"+userID);
                // axios.get("http://localhost:5000/dashboard/"+userID,{
                    
                //     headers:{
                //         "authorization":localStorage.getItem("token")

                //     }
               
                // })
                
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
    

    function RedirectRegister(){
        window.location.href ='/register';
    }

    return(
        <Container>
            
            <Content>
            <Alermsg tlerro ={pad}>{msg}</Alermsg>
            {/* <p>{String(authenticated)}</p> */}

                <h2>Entrar</h2>
                <form >
                    
                    <div className="field">
                        <label><span>Email</span></label>
                        <input  
                        type="email" 
                        name='email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}required
                        
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
                        
                        autoComplete="current-password"
                        />
                    </div>
                
                    <input 
                    type="submit" 
                    value='Entrar' 
                    onClick={Login}/>
                </form>
                
                <label> Cadastre-se  <input
                    
                    className="regis" 
                    type="submit" 
                    value='Registrar' 
                    onClick={RedirectRegister}/> </label>
            </Content>
        </Container>
    )
}