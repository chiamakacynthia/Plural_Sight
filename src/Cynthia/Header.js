import React, {useState} from 'react'
import styled from "styled-components"
import {BiSearch} from "react-icons/bi"
import {IoMdArrowDropdown} from "react-icons/io"
import {CgMenuRightAlt} from "react-icons/cg"
import {GiCancel} from "react-icons/gi"
import Fade from 'react-reveal/Fade';
import DropMenu from "./DropMenu"
import Platform from './Platform'
import Resource from "./Resources"
import Product from "./Product"
import SideBar from './DropMenu'
import {Link} from "react-router-dom"



const Header = () => {
    const [show, setShow] =useState(false)
    const [appear, setAppear] =useState(false)
    const [show1, setShow1] = useState(false)
    const [toggle, setToggle] = useState(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }

    const OnShow = () => {
        setShow(!show)
    }

    const onAppear = () => {
        setAppear(!appear)
    }
    const onShow1 = () => {
        setShow1(!show1)
    }

    return (
        <Container>
            <Wrapper>
                <Left><Logo src = "images/PS_logo.png"/>
            <Dropdown>
                <Span >
                    <Platform appear={appear}/>
                    Platform 
                    <Icon1 onClick={onAppear}/>
                </Span>
                <Span >
                    <Product show={show}/>
                 Product
                   
                    <Icon1 onClick={OnShow}/></Span>

                <Span >
                    <Resource show1={show1}/>
                    Resources <Icon1 onClick={onShow1}/></Span>
                <Link to="/Individual"><Span>For Individuals</Span></Link>
            </Dropdown>
            </Left>
            <Right>
               <Icon/>
               <Link to="/signin"> <Sign>Sign In <Icon1/></Sign></Link>
                <Button>Try For Free</Button>
                
   {toggle ? (
   <Cancel  onClick={onToggle}/>
        
       ) :(
        <Menu  onClick={onToggle}/> 
       )} 
    <SideBar toggle = {toggle}/>

{/* <div>
    {toggle ? <div> <DropMenu  /></div> : null}
</div>  */}
 <Fade left when={toggle}>
    
         
        </Fade>
            </Right>
          
            </Wrapper>
        </Container>
    )
}

export default Header

const Menu = styled(CgMenuRightAlt)`
font-size:30px;
font-weight:bold;

@media screen and (min-width: 886px){
    display: none;
}
@media screen and (max-width: 886px){
    display: block;
}
`
const Cancel= styled(GiCancel)`
font-size: 30px;
font-weight: bold;
`

const Icon1 = styled(IoMdArrowDropdown)`
font-size:20px;
font-weight:bold;
`
const Icon = styled(BiSearch)`
font-size:30px;
font-weight:bold;

@media screen and (max-width: 886px){
    margin-left: 25px;
}
`

const Left = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;

`
const Right = styled.div`
width: 30%;
height: 100%;
display: flex;
margin-right: 10px;
justify-content: space-between;
align-items: center;
font-size:20px;
font-weight:bold;
/* background-color:red */
`
// const Search = styled.div``
const Sign = styled.div`
cursor: pointer;
color: white;
@media screen and (max-width: 886px){
    display: none
}
`
const Button = styled.div`
width: 150px;
height: 40px;
background-color:transparent;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;


&:hover{
    border: 2px solid white; 
    transition:all 350ms;
    transform: scale(1);

}

@media screen and (max-width: 886px){
    display: none
}
`

const Container  = styled.div`
width: 100%;
height: 100px;
display: flex;
background-color:#212121;
color: white;
justify-content: center;
/* position: fixed;
z-index: 1; */

`

const Wrapper = styled.div`
width: 90%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
/* margin-left: 40px; */
`
const Logo = styled.img`
width: 200px;
height: 50px;
margin-left:20px;
object-fit: contain;
cursor: pointer;
`
const Dropdown = styled.div`
width: 66%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 886px){
    display: none
}
`
const Span = styled.div`
font-size:15px;
font-weight:bold;
margin-left: 10px;
display: flex;
cursor: pointer;
color: white;
`