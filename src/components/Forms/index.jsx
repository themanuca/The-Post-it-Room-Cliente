import React, {useState, useEffect} from "react";
import { Container,Content, Alermsg } from "./styles";
import api from '../../services/api';
import axios from "axios";
//import { redirect } from "express/lib/response";

export default function Forms(){

    var url = "http://localhost:5000";

    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[msg, setMsg] = useState();

    async function salvar(e){
        e.preventDefault();
        const data = {
            nome_user:nome, 
            email_user:email, 
            senha_user:senha, 
            username_user:username,
        } 
       
        const res = await api.post(url + '/api/register',data);
       

            if(res.status === 200){
                
                window.location.href ='/login';

            }else if (res.status === 299){

                setMsg(res.data.msg)
            }
            else {
                alert('ERRO NO SERVIDOR')
            }
        
            console.log(res.data);

    }
    var pad = 0;
    useEffect(()=>{
        var pad = 1;
    },[msg])

    function redirectLogar(){
        window.location.href ='/login';

    }

    return (
        <Container>
            <Alermsg tlerro ={pad}>{msg}</Alermsg>
            <Content>
               
                <h2>Sign Up</h2>
                <form >
                    <div className="field-1">
                        <label><span>Name</span></label>
                        <input 
                        type="text" 
                        name='fistname' 
                        value={nome} 
                        onChange={e=>setNome(e.target.value)} required/>
                    
                    </div>

                    <div className="field">
                        <label><span>Username</span></label>
                        <input 
                        type="text"
                        name='username'
                        value={username}
                        onChange={e=>setUsername(e.target.value)} 
                        required
                        

                        />
                    </div>

                    <div className="field">
                        <label><span>Email</span></label>
                        <input 
                        type="email" 
                        name='email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}required

                        />
                    </div>

                    <div className="field">
                        <label><span>Password</span></label>
                        <input 
                        type="password" 
                        name='password'
                        value={senha}
                        onChange={e=>setSenha(e.target.value)}
                        required
                        autoComplete="current-password"

                        />
                    </div>
                
                    <input 
                    type="submit" 
                    value='Registrar' 
                    onClick={salvar}/>

                </form>

                <input 
                    className="Logeer"
                    type="submit" 
                    value='Logar' 
                    onClick={redirectLogar}/>


            </Content>
        </Container>
    )
}