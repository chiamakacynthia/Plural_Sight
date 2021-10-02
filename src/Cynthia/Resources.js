import React from 'react'
import styled from "styled-components"

const Platform = () => {
    return (
        <Contaner>
          <Wrapper>
<One>
    <span>Ways To Upskill</span>
<First>
 <Span>Blog</Span>
</First>
<First>
   <Span> Customer Stories</Span>
</First>
<First>
    <Span>Resource Center</Span>
</First>
<First>
     <Span> Guide</Span>
</First>
<First>
   <Span> App download</Span>
</First>
<First>
     <Span> Support</Span>
</First>
</One> 
<Line/>

<One1>
    <span>Connect</span>
<First>
    <Span>Events</Span>
</First>
<First>
 <Span> Webinars</Span>
</First>
<First>
 <Span>Podcast</Span>
</First>
</One1> 

<Box>
    <CardIcon src="images/tech_skill.jpg"/> 
    <Button>LEARN MORE</Button>
</Box>

          </Wrapper>
        </Contaner>
    )
}

export default Platform

const Contaner = styled.div`
width: 100%;
height: 60vh;
background-color:#060606;
padding: 20px;
justify-content: center;

`
const Button = styled.div`
width: 180px;
height: 60px;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 350px;
background-color:#EC0A81;
margin-left: 50px;
margin-top: 20px;
&:hover{
    border: 2px solid white; 
    transition:all 350ms;
    transform: scale(1);
background: linear-gradient(#F0493C, #EE1E6B);
box-shadow: rgba(251, 201 212, 0.5);
}
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;

`
const Line = styled.div`
height:80% ;
border-left: 1px solid white;
opacity: 0.5;
`

const Box = styled.div`
width: 100%;
height: 100%;
margin-top: -25px;
`

const CardIcon = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
position: relative;
`


const First = styled.div`
display: flex;
width: 100%;
height: 100%;
/* justify-content:center; */

`

const One = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 80%;


span{
    font-size:15px;
font-weight:normal;
font-family: poppins;
opacity: 0.5;
display: flex;
margin-bottom:20px;
text-transform:uppercase;
/* justify-content: center; */
}
`
const One1 = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 40%;
margin-left:20px;


span{
    font-size:15px;
font-weight:normal;
font-family: poppins;
opacity: 0.5;
display: flex;
margin-bottom:20px;
text-transform:uppercase;
/* justify-content: center; */
}
`

const Span = styled.div`
font-size:20px;
font-weight:bold;
margin-left: 10px;
`