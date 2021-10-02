import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
background-color:black;
/* background-image: url("bg-container.png");
background-repeat: no-repeat; */
`
export const Sign = styled.div`
flex: .4;
height: 100%;
background-color: rgb(13,15,18);
display: flex;
align-items: center;
flex-direction: column;

`
export const Left = styled.div`
width:60%;
height: 500px;
margin-top: 50px;
`

export const Input__Holder = styled.div`
`
export const Input = styled.div`
height: 150px;
color: white;
`
export const Input1 = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
 div{
    font-size: 20px;
 }
 input{
    background-color: transparent;
    border: 1px solid darkgray;
    width: 96%;
    height: 30px;
    border-radius: 5px;
    color: white;
 }
`

export const Input2 = styled.div`
 div{
    font-size: 20px;
 }
 input{
    background-color: transparent;
    border: 1px solid darkgray;
    width: 96%;
    height: 30px;
    border-radius: 5px;
    color: white;
 }
`
export const Button = styled.button`
margin-top: 40px;
background-color: #0074AB;
width: 100%;
height: 30px;
border-radius: 5px;
color: white;
border: none;
 &:hover{
    background-color: #18b1ba;
    cursor: pointer;
 }
`

export const Forget__Password = styled.div`
/* height: 100px; */
border-bottom: 1px solid darkgrey;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;

 div{
     font-size: 17px;
     font-weight: 10px;
     color: #3ce0ee;
     margin-bottom: 20px;
 }
`
export const Create__acct = styled.div`
/* border: 1px solid white; */
height: 150px;

`
export const Acct__button = styled.button`
margin-top: 20px;
background-color: #333840;
width: 100%;
height: 30px;
border-radius: 5px;
border: none;
margin-bottom: 40px;
color: white;
 &:hover{
    background-color: #999aa2;
    cursor: pointer;
 }
 `

export const Footer = styled.div`
font-size: 12.7px;
font-weight: 70px;
color: #999aa2;
display: flex;
flex-direction: column;
align-items: center;
`

export const Logo = styled.img`
height: 50px;
width: 70%;
object-fit: contain;
`

export const Wall = styled.div`
flex: .6;
height: 100vh;
`
export const Image = styled.div`
height: 100vh;
background-image: url("bg-container.png");
background-position: center;
background-repeat: no-repeat;
background-size: contain;
margin-left: 310px;
display: flex;
justify-content: center;
align-items: center;
/* padding-right: 450px;
padding-bottom: 100px; */
position: relative;
`
export const Text__Image = styled.img`
position: absolute;

height: 300px;
width: 500px;
bottom: 230px;
right: 210px;
`
export const Button__Image = styled.img`
position: absolute;
height: 40px;
bottom: 50px;
right: 50px;

`
export const Button__cool = styled.button`
position: absolute;
width: 220px;
height: 40px;
border: none;
color: white;
font-weight: bold;
font-size: 15px;
text-transform: uppercase;
top: 400px;
right: 500px;
margin-top:40px;

background-image: linear-gradient(to right,#F05A28,#EC008C,#F05A28); 
 &:hover{
    cursor: pointer; 
    background-size: 300% 100%;
    transition: all .6s ease-in-out;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
 }
`

// export const Image = styled.div`
// `
// export const Image = styled.div`
// `