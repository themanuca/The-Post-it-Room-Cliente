import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html{
    background:linear-gradient(45deg,#8e2de2, #4a00e0 );
    background-repeat: no-repeat;
}

`;


export const Container = styled.div`
    >H1{
        padding: 30px;
        
    }
 




`;


export const Content = styled.div`

  
  >img{
      width: 100vw;
      height: 100vh;
      
  }


.title{
    padding: 1rem;
    color:#fff ;
}



`;

export const Container_card = styled.div`
     @media(min-width: 800px){
        display: flex;
        flex-wrap: wrap;
    }
    justify-content: center;
     
    

`;

export const Container_Menu = styled.nav`
width: 100vw;
height: 15vh;
background-color: white;
position:fixed;
z-index: 3;
bottom: 0px;
display: flex;
justify-content: space-around;

div{
    
    padding-top:0.7rem;
    align-items: center;
}


.list-menu-2, .list-menu-1{
    list-style: none;
    font-weight: 600;

    >li{
        padding-top: 0.3rem;
    }
    >li > button{
        background: linear-gradient(to left, #4776e6, #8e54e9);
        padding: 0.3rem;
        border-radius: 6px;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
    
}

`;

