import React from "react";
import {Container, Imagem, Content} from './styles';
import imgregistro from '../../../img/img-register.jpg'
import Forms from '../../../components/Forms/index'

export default function Register(){
    return(
        <Container>
           <Content>
                <Forms/>
                {/* <Imagem src={imgregistro}/>  */}

            </Content>
        </Container>
    )
}