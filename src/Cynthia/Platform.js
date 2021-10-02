import React from 'react'
import styled from "styled-components"
import {RiDashboardLine} from "react-icons/ri"
import {FiMapPin} from "react-icons/fi"
import {AiOutlineCloud} from "react-icons/ai"
import { HiOutlineDocumentText} from "react-icons/hi"
import { IoIosHand} from "react-icons/io"
import { GiTeamDowngrade} from "react-icons/gi"


const Platform = ({appear}) => {
    return (
<>
    
       {appear ?
         <Contaner>
         <Wrapper>
<One>
   <span>Ways To Upskill</span>
<First>
   <Icon/> <Span>Courses</Span>
</First>
<First>
   <Icon1/> <Span> Skill assessments</Span>
</First>
<First>
   <Icon2/> <Span>Labs</Span>
</First>
<First>
   <Icon3/> <Span> Hands-on learning</Span>
</First>
<First>
   <Icon4/> <Span> Certification prep</Span>
</First>
<First>
   <Icon5/> <Span> Team efficiency</Span>
</First>
</One> 
<Line/>

<One1>
   <span>Skills for</span>
<First>
   <Span>Software development</Span>
</First>
<First>
<Span> IT ops</Span>
</First>
<First>
<Span>Info & cyber security</Span>
</First>
<First>
    <Span> cloud computing</Span>
</First>
<First>
  <Span>Machine learning/ AI</Span>
</First>
<First>
   <Span> Data professional</Span>
</First>
{/* <Line/> */}
</One1> 
<Box>
<span>Skills for</span>
<Second><Card>
   <CardIcon src="images/windowIcon.png"/> 
   <R>
   <Text>Microsoft Azure <br/>Deployment</Text>
  <H> <Courses><span1> 4 </span1>Courses</Courses>
   <Time> <span1>7</span1> Hours <Icon1/> </Time></H>
   </R>
   </Card>
<Card>
   <CardIcon src="images/awsicon.png"/> 
   <R>
   <Text>AWS Operations</Text>
  <H> <Courses><span1> 7</span1>Courses</Courses>
   <Time> <span1>14</span1> Hours <Icon1/> </Time></H>
   </R>
</Card></Second>
<Second>
<Card>
   <CardIcon src="images/cleaningData.png"/> 
   <R>
   <Text>Cleaning Data with R</Text>
  <H> <Courses><span1> 5 </span1>Courses</Courses>
   <Time> <span1>6</span1> Hours <Icon1/> </Time></H>
   </R>
</Card>
<Card>
   <CardIcon src="images/rubyIcon.png"/> 
   <R>
   <Text>Ruby Language Fundamentals</Text>
  <H> <Courses><span1> 7 </span1>Courses</Courses>
   <Time> <span1>13</span1> Hours <Icon1/> </Time></H>
   </R>
</Card>
</Second>
<Card>
   <CardIcon src="images/python.png"/> 
   <R>
   <Text>Core Python</Text>
  <H> <Courses><span1> 23 </span1>Courses</Courses>
   <Time> <span1>41</span1> Hours <Icon1/> </Time></H>
   </R>
</Card>
</Box>

         </Wrapper>
       </Contaner> 
       : null   
    }

</>
    )
}

export default Platform

const Contaner = styled.div`
width: 90%;
height: 65vh;
background-color:#060606;
padding: 20px;
position: absolute;
top: 14%;
z-index:1;
right: 10px;
`
const Courses = styled.div`
font-size:12px;
opacity: 0.5;
margin-top: 6px;

span1{
    opacity: 1;
}
`
const Second = styled.div`
width: 600px;
display: flex;
`

const Time = styled.div`
font-size:12px;
opacity: 0.5;
margin-right: 5px;


span1{
    opacity: 1;
}
`
const Wrapper = styled.div`
width: 95%;
height: 90%;
display: flex;
`
const Line = styled.div`
height:80% ;
border-left: 1px solid white;
opacity: 0.5;

`
const R = styled.div`
width: 60%;
height:90%;
display: flex;
flex-direction:column;
`
const H = styled.div`
width: 100%;
height:90%;
display: flex;
justify-content:space-around;
align-items:center;
`
const Text = styled.div`
font-size:13px;
font-weight:bold;
margin-right: 5px;
margin-top: 5px;

`

const Box = styled.div`
width: 50%;
height: 80%;
display: flex;
margin-top: 10px;
margin-left: 20px;
flex-wrap: wrap;

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
const Card = styled.div`
width: 250px;
height: 80px;
display: flex;
margin-left:10px;
border-radius: 10px;
background-color:#252525;
justify-content: space-around;
align-items: center;
margin-top: 10px;
color: white;
`
const CardIcon = styled.img`
width: 50px;
height: 50px;
object-fit: contain;
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
color: white;


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
height: 80%;
margin-left:20px;
color: white;


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

const Icon = styled(RiDashboardLine)`
font-size:20px;
font-weight:bold;
`
const Icon1 = styled(FiMapPin)`
font-size:20px;
font-weight:bold;
`
const Icon2 = styled(AiOutlineCloud)`
font-size:20px;
font-weight:bold;
`
const Icon3 = styled(IoIosHand)`
font-size:20px;
font-weight:bold;
`
const Icon4 = styled(HiOutlineDocumentText)`
font-size:20px;
font-weight:bold;
`
const Icon5 = styled(GiTeamDowngrade)`
font-size:20px;
font-weight:bold;
`
const Span = styled.div`
font-size:20px;
font-weight:bold;
margin-left: 10px;
`