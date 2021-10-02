import React from 'react'
import styled from "styled-components"





const Product = ({show}) => {

    return (
<>
      {show ? 
      
      <Container>
      
      <div>

<Wrapper>
<Up>
<Icon src="images/skill.png"/>
<Text1>Build tech skill to drive results</Text1>
<Line/>
<Text2>What is Skills?</Text2>
<Text2>View plans</Text2>
</Up>
<Line1/>
<Up>
<Icon src="images/Flow.png"/>
<Text1>Get insights into your workflow</Text1>
<Line/>
<Text2>What is Flow?</Text2>
<Text2>View plans</Text2>
</Up>
     </Wrapper>

</div>
  
 </Container> : null
    }  

</>
    )
}

export default Product

const Container = styled.div`
width: 500px;
height: 200px;
display: flex;
background-color:#212121;
margin-left: 300px;
align-items: center;
position: absolute;
z-index: 1;
top: 10%;
right: auto;
left: 13%;
`
const Wrapper = styled.div`
width: 90%;
height: 85%;
display: flex;
padding: 20px;
z-index: 1;
`
const Icon = styled.img`
width: 100px;
height: 40px;
object-fit: contain;
`
const Line = styled.div`
width: 90%;
border-bottom: 1px solid white;
opacity: 0.3;
`
const Line1 = styled.div`
height: 95%;
border-left: 1px solid white;
opacity: 0.3;
`
const Up = styled.div`
width: 50%;
height: 100%;
/* padding: 10px; */
display: flex;
flex-direction: column;
align-items: center;

justify-content: space-around;
`

const Text1 = styled.div`
font-size:15px;
font-weight:normal;
color: white;
text-align:center;

`
const Text2 = styled.div`
font-size:15px;
font-weight:bold;
color: white;
opacity: 1;
`
