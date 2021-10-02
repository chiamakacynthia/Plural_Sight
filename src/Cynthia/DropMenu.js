import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from "react-icons/io"
import {Link} from "react-router-dom"

const SideBar = ({toggle, appear}) => {
    return (
       <>
      {toggle?
       <Container>
       <Content 
      
       >
          <Holder>
          <Link to="/plat"><span>Platform <Icon1/></span></Link>
           <hr/>
          </Holder>
          <Holder>
          <span>Products <Icon1/></span>
           <hr/>
          </Holder>
          <Holder>
          <span>Resources <Icon1/></span>
           <hr/>
          </Holder>
          <Holder>
          <span> For Individuals</span>
           <hr/>
          </Holder>
         
          <Holder>
          <span> Sign In <Icon1/></span>
           <hr/>
          </Holder>
         
          <Holder>
          <Button>Try For Free</Button>
           <hr/>
          </Holder>
         
       </Content>
      
   </Container> : null
    }
       </>
    )
}

export default SideBar


const Container = styled.div`
width: 100vw;
height: 500px;
background-color:#000000;
z-index:1;
position : fixed;
margin-left: -240px;
margin-top : 600px;

@media screen and (min-width: 886px){
    display: none

}
`

const Button = styled.div`
width: 200px;
height: 60px;
background-color:transparent;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
margin-left: 60px;
margin-bottom: 20px;

&:hover{
    border: 2px solid white; 
    transition:all 350ms;
    transform: scale(1);

}
`

const Content = styled.div`
padding-top: 30px;
height: 80%;
/* width: 100%; */
display: flex;
justify-content: center;
flex-direction: column;
`
const Holder = styled.div`
height: 100%;
/* width: 100%; */
display: flex;
justify-content: center;
flex-direction: column;

span{
    font-size: 20px;
    font-weight: bold;
    font-family: poppins;
    margin-left: 20px;
}

 hr{
   border: 1px solid white;
   opacity: 0.5;
width: 100%; 
} 
`

const Icon1 = styled(IoIosArrowForward)`
font-size:20px;
font-weight:bold;
`

