import React, {useState, useEffect} from "react";
//import { AreaPost } from "../../../home/styles";
import { Container, Content,AreaPost } from "./styles";
import api from "../../../../services/api";
import Cores from "../../../../components/cores/index"
import { Button } from "../../../../components/btn/styles";
// import { Container } from './styles';

function Post() {

    const [digitado, setDigitado] = useState(""); // Valor digitado no textarea
    const [check, setCheck ] = useState(""); // Recebe o valor das cores do postit, escolhido pelo o user.
    const [ disableCor, setDisableCor]=useState("")//Permite que apenas uma cor por vez seja clicada

    var url = process.env.REACT_APP_API_URL

    // let userid = localStorage.getItem('user');
    // let value = JSON.parse(userid)
    // console.log(value.userID)

    //console.log(value.userID)
    
    console.log(check);

    async function handleSubmit(){
      

        if(digitado.length  >= 10){
            let userid = localStorage.getItem('user');
            let value = JSON.parse(userid)

            
            const data = {
                post_id:value.userID,
                post_texto:digitado,
                post_cor:check
            }
            
            const response = await api.post(url+'/dashboard/user/auth/post',data);
            
            
            if(response.status == 200){
                window.location.href ='/dashboard/'+value.userID
            }else{
                alert('NÃO FOI')
          
            }

        }else{
            alert('Tem que ter no minímo 10 caracteres')
        }
    }
    
    async function CorCheck(e){
        setCheck(e.target.value)
       //await setDisableCor("true")

       var tst = document.querySelector(`[value=` + `"${e.target.value}"]`)
       
       //console.log(tst)
    }

    var v = digitado.length
    if(v == 150){
        var limite = "red"
        var msg = "Limite de caracteres alcançado"
    }

return (
  
    <Container>
        <Content>
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
            
              <Cores onChange={CorCheck} />

            <button className="btn" onClick={handleSubmit}>Enviar</button>


        </Content>
    </Container>
  
    );
}

export default Post