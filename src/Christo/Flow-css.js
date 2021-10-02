import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
color:white;
`

export const Hero = styled.div`
height: 90vh;
width: 100%;
background-image: url("flow-back.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const Hero__wrapper = styled.div`
position: absolute;
line-height: 10px;
margin: 100px 0 0 10px;
`
export const Image = styled.img`
width: 125px;
object-fit: contain;
`
export const Text = styled.div`
line-height: 20px;
`
export const Text__Head = styled.h1`
font-size: 40px;
font-weight: bolder;
font-family: PS Commons Bold;
line-height: 100%;
color:white;
`
export const Text__span = styled.div`
font-size: 20px;

`
export const Button__Holder = styled.div`
margin-top: 40px;
display: flex;
`
export const Button1 = styled.button`
width: 220px;
height: 50px;
border: none;
color: white;
font-weight: bold;
font-size: 15px;
text-transform: uppercase;
background-image: linear-gradient(to right,#3ce0ee,#0c74c0,#3ce0ee); 
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

export const Sub__body = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
/* padding-top: 10px; */
background-color: rgb(24,24,24, 1);
`
export const Content = styled.div`
width: 700px;
max-height: 900px;
`

export const Over = styled.div`
font-size: 27px;
color: #1c9cb3;
margin-bottom: 30px;
`

export const Sub__head = styled.div`
font-size: 42px;
font-weight: bolder;
letter-spacing: 1px;
color: white;
`

export const Sub__text = styled.div`
font-size: 18px;
margin-top: 30px;
color: white;
`

export const Button2 = styled.button`
 div{
    color: red;
 }
height: 50px;
display: flex;
align-items: center;
margin-left: 20px;
background-color: transparent;
border: none;
color: white;
font-weight: bolder;
font-size: 17px;
margin-right: 19px;
`

export const Image1 = styled.img`
height: 200px;
width: 370px;
margin-left: 200px;
/* margin-right: 30px; */
border-radius:10px;
object-fit:contain;

`
export const Avatar = styled.div`
height: 100vh;
width: 100%;
background-image: url("lap.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const Modal = styled.img`
width: 100%;
height: 50vh;

`
export const Mode = styled.div`

`
