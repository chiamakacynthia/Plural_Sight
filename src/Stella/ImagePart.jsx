import React from "react";
import styled from "styled-components";
//  import img from "images/sunp.jpg";
// import img1 from "../images/blue.png";
import GlobalButton from "./GlobalButton";

const ImagePart = () => {
  return (
    <Container>
      <Wrapper>
        <My>My pluralsight story</My>
      </Wrapper>
      <Text>
        <Bold> From soldier to it cleared</Bold>
        <Text2>
          Ryan Chasteauneuf had always dreamed of being a soldier. After
          disaster struck in Afghanistan, he was forced to abandon his lifelong
          dream and start over. Driven to achieve in the face of adversity, he
          turned to Pluralsight to upskill.
        </Text2>
        <GlobalButton bg text="See ryan's story" />
      </Text>
    </Container>
  );
};

export default ImagePart;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
  /* height: 100%; */

  /* min-height: 100vh; */

  /* @media screen and (max-width: 768px) {
    height: 300px;
  } */
`;
const Wrapper = styled.div`
  width: 55%;
  height: 450px;
  background: url(${"images/sunp.jpg"});
  background-repeat: no-repeat;
  object-fit: cover;
 
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
const Text = styled.div`
 width: 42%;
  height: 410px;
  background-color: #189db3;
  padding: 20px;
  /* height: 100%; */

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
const My = styled.div`
  position: absolute;
  font-size: 55px;
  width: 200px;
  font-weight: bold;
  height: 100%;
  display: flex;
  /* align-items: center; */
  padding-left: 20px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 30px 0px;
  text-transform: uppercase;
`;
const Text2 = styled.div`
  margin: 20px 0px;
`;
