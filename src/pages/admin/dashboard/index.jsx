import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import {AuthContext} from '../../../components/contexts/auth';
import imgback from '../../../img/backconstruc.jpg'
// import { Container } from './styles';

function Dashboard() {

    const {Logout} = useContext(AuthContext);

    const handleLogout = ()=>{
        Logout();
    }
    const {id} = useParams();
  return(
      
    
        <Container id={id ? Number.parseInt(id,10):null}>
            <h1>DASHBOARD em DESENVOLVIMENTO</h1>
            <h3>Você está autenticado</h3>

            <img src={imgback}/>

            <button onClick={handleLogout}>SAIR</button>
        </Container>
    
    
    );
}

export default Dashboard;