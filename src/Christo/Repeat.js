import React from 'react'
// import { Container, Content, Button2, Image1, Over, Sub__body, Sub__text, Sub__head, } from './Repeat-css'
import styled from "styled-components";
import { AiOutlineRight } from 'react-icons/ai'


const Repeat = ({fd, img}) => {
    return (
        <Container>
           <Sub__body fd={fd}>
          <Image1 src ={img} />
              <Content>
                  <Over>overview</Over>
                  <Sub__head>
                  See your team like never 
                  <div>before</div>
                  </Sub__head>
                  <Sub__text>
                  Flow gives you unmatched visibility into your team’s workflow 
                  <div>patterns so you can identify bottlenecks, compare trends and help</div>
                  <div>your team be as effective as possible.</div>
                  </Sub__text>
                  <Button2>
                      What is flow?
                   <div><AiOutlineRight/></div>
                  </Button2>
              </Content>
          </Sub__body>  
        </Container>
    )
}

export default Repeat

 const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
 const Sub__body = styled.div`
width: 90%;
height: 70vh;
display: flex;
flex-wrap: wrap;
flex-direction: ${({fd}) => (fd ? "row-reverse" : "row")};
justify-content: space-between;
align-items: center;
margin-top: 150px;
margin-bottom: 10px;
`
 const Content = styled.div`
/* width: 500px; */
max-height: 900px;
`

 const Over = styled.div`
font-size: 27px;
color: #1c9cb3;
margin-bottom: 30px;
`

 const Sub__head = styled.div`
font-size: 42px;
font-weight: bolder;
letter-spacing: 1px;
color: white;
`

 const Sub__text = styled.div`
font-size: 18px;
margin-top: 30px;
color: white;
`

 const Button2 = styled.button`
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

 const Image1 = styled.img`
height: 500px;
object-fit:contain;

`
