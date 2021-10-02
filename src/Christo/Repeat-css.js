import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
color:white;
`
export const Sub__body = styled.div`
width: 90%;
height: 70vh;
display: flex;
flex-wrap: wrap;
flex-direction: ${({fd}) => (fd ? "row-reverse" : "row")};
justify-content: space-between;
align-items: center;
`
export const Content = styled.div`
width: 500px;
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
height: 500px;
object-fit:contain;

`