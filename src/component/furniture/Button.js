import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 15px;
background: transparent;
border: 1px solid var(--mainYellow);
border-color: ${props=> props.cart? "var(--mainYellow)": "var(--mainPink)"};
display: flex;
align-items: center;
color: black;
border-radius: 5px;
cursor: pointer;
padding: 3px 10px;
tansition: all 1s ease-in-out;
&:hover{
    background: ${props=> props.cart? "var(--mainYellow)": "var(--mainPink)"};
    color: white;
}
&:focus{
    outline: none;
}
`
export const NavWrapper = styled.nav`
background-color: #bb715c;
.logo{
    color: var(--mainYellow);
    font-size: 25px;
    margin-top: -5px;
  }
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 20px;
    text-transform: capitalize !important;
}
.cart span{
    font-size: 20px;
    margin-top: -5px;
}
a.cart:hover{
    text-decoration: none;
}
`

export const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px grey;
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;    
}
.card-img-top{
    transition: all 0.8s linear;
    height: 200px;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0px 20px;
    background: var(--mainYellow);
    border: none;
    color: var(--mainWhite);
    font-size: 25px;
    border-radius: 5px 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.8s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: rgb(179, 100, 82);
}
`
export const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
#modal{
    background: var(--mainWhite);
}
`