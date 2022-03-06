import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Container,Content, Container_Menu,Container_card, GlobalStyle } from "./styles";
import {AuthContext} from '../../../components/contexts/auth';
import imgback from '../../../img/backconstruc.jpg'
import api from "../../../services/api";
import Card from "../../../components/card";
//require("dotenv/config");


function Dashboard() {

    const [cardPost, setCardpost] = useState([]); //Recebe os dados que são puxado do banco
    const {id} = useParams();


    var url = process.env.REACT_APP_API_URL

    useEffect(()=>{
        async function carregaPost(){

            const data =  {
                post_id:id
            }
            const response = await api.post(url+"/dashboard/user/auth/", data);
            setCardpost(response.data.reverse())
        }
        carregaPost();
    },[])


    const {Logout} = useContext(AuthContext);

    const handleLogout = ()=>{
        Logout();
    }


    const maisPost = ()=>{
        let userid = localStorage.getItem('user');
            let value = JSON.parse(userid)
        window.location.href ='/dashboard/'+value.userID+"/post";

    }
  return(
      
    
        <Container>
            <GlobalStyle/>

            
           <Content>
               <h2 className="title">My Post-it Room</h2>
                <Container_card>
                    {cardPost.map((item)=>(
                                
                                <Card key={item._id}   cor={item.post_cor} texto={item.post_texto}/>
                                
                            ))}

                </Container_card>
                
                <Container_Menu>

                    <div>                  
                        <ul className="list-menu-1">
                            <li><h4>@the_manuca</h4></li>
                          <li>  <p>Sou um gênio</p></li>
                          <li><button onClick={maisPost}>+ Postit</button></li>

                        </ul>
                    </div>
                    <div>
                        <ul className="list-menu-2">
                           <li> <button>Configuração</button></li>

                            <li><button className="vaza" onClick={handleLogout}>SAIR</button></li>

                        </ul>
                    </div>
                </Container_Menu>
           </Content>

           
        </Container>

    
    );
}

export default Dashboard;