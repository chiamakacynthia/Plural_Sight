import styled from "styled-components"

export const Container = styled.div`
/* height: 100vh; */
width: 100%;
color : white
`

export const Hero = styled.div`
height: 100vh;
width: 100%;
background-image: url("bg.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const Hero__wrapper = styled.div`
position: absolute;
line-height: 10px;
margin: 100px 0 0 30px;
`
export const Image = styled.img`
/* height: 100px; */
width: 100%;
position: relative;
object-fit: cover;
top: 10px;
`
export const Text = styled.div`
line-height: 50px;
`
export const Text__Head = styled.h1`
font-size: 58px;
font-weight: bolder;
font-family: PS Commons Bold;
/* line-height: 100%; */
`
export const Text__span = styled.div`
font-size: 23px;
color: white;
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
border-radius:6px;
font-size: 15px;
text-transform: uppercase;
background-image: linear-gradient(to right,#F05A28,#EC008C,#F05A28); 

    &:hover{
    border: 2px solid white; 
    transition:all 350ms;
    transform: scale(1);
background: linear-gradient(#F0493C, #EE1E6B);
box-shadow: rgba(251, 201 212, 0.5);

 }
`
export const Button2 = styled.button`
/* width: 150px; */
height: 50px;
display: flex;
align-items: center;
margin-left: 20px;
background-color: transparent;
border: none;
color: white;
font-weight: bolder;
font-size: 17px;
margin-right: 5px;

`
export const Play = styled.div`
background-color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
color: black;
height: 40px;
width: 40px;
margin-right: 10px;
`
export const Right = styled.div`
color: red;
margin-left: 10px;
`
export const Sub__body = styled.div`
width: 100%;
/* height: 100vh; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding-top: 20px;
background-color: rgb(24,24,24, 1);
`
export const Content = styled.div`
width: 500px;
/* max-height: 900px; */
margin-left: 30px;
`
export const Sub__head = styled.div`
font-size: 40px;
font-weight: bold;
letter-spacing: 1px;
`

export const Sub__text = styled.div`
font-size: 18px;
margin-top: 30px;
`

export const Video = styled.video`
width: 700px;
height: 400px;
/* background-color: blue; */
margin-right: 30px;
border-radius:10px;
object-fit:cover;

`
// export const Hero = styled.div`

// `