import styled from 'styled-components';

export const Container = styled.div`
  
`;



export const Content = styled.div`
.corP{
    color: black;   
} 

.btn{
    background: linear-gradient(to left, #4776e6, #8e54e9);
        padding: 1.3rem;
        border-radius: 6px;
        color: white;
        font-weight: 600;
}

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

.corP{
    color: black;
}

`;

