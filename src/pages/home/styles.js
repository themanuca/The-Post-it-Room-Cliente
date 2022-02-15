import styled, {createGlobalStyle} from "styled-components";
import backimg from '../../img/background-home.jpg'
// import img from "../../assets/background.jpg"


// export const All=styled.div `

// text-align: center;
// justify-content: center;

// `;

export const GlobalStyle = createGlobalStyle`



*{
    font-family: 'Poppins', sans-serif;
    align-items: center;
    justify-content: center;
    text-align: center;
}

body{
    background-image: url(${backimg});
    
}


`;

export const Lista = styled.ul `

display: flex;
list-style: none;
color: #FFFFFF;

li {
    padding:0 15px;
    font-size: 17px;
    
}

li a {
    color: #EAEDED;
    text-decoration: none;
    font-weight: 500 ;
}

li a:hover{
    color: #4F4F4F	
}
`;

export const Title = styled.h2 `
a {
    color:#EAEDED;
    font-weight: 500 ;
    text-decoration: none;
}
`;

export const Navgation = styled.header `
padding-top: 15px;
display:flex;
justify-content: space-between;
margin: 0.7rem 1rem;
align-items: center;
`;
export const Description = styled.p `
margin: 0  3rem;
margin-top: 5rem;
text-align: center;
font-weight: 500;
font-size:30px;
color: #EAEDED;
text-shadow: black 0px 0.1px 1px;

`;

export const AreaPost = styled.div`
justify-content: center;
text-align: center;
align-items: center;
margin: 3rem;
display: block;


textarea{
    width: 60vw;
    height: 40vw;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    padding: 10px;
    font-size:16px;
    background-color:#323232;
    color: #EAEDED;
}




@media (min-width:900px){
    textarea{
        width: 40vw;
        height: 20vw;
    }
   
}


`;


export const Ctn = styled.div`

display: flex;
flex-wrap: wrap;
background-color: aliceblue;
`;