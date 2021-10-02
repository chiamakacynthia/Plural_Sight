import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../Individual/GlobalButton2";
// import img from "../images/bgl.png";
import img2 from "../images/logo-skills.png";

const Top = () => {
  return (
    <Container>
      <Wrapper>
        <LogoText>
          <Logo src={img2} />
          <Text>for individuals</Text>
        </LogoText>
        <Bold>For Individuals: Build better skills</Bold>
        <Text1>
          With the technology skills platform, you can see where your skills
          stand and master the latest in software development, IT ops, AI and
          machine learning, security and more.
        </Text1>
        <GlobalButton2 text="Try for free" />
      </Wrapper>
      <Image src="images/hero.png" />
    </Container>
  );
};

export default Top;

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  width: 400px;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    width: 300px;
    object-fit: cover;
  }
`;
const LogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const Logo = styled.img`
  height: 20px;
`;
const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-left: 5px;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 1.2;
  margin: 10px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  margin: 20px 0px;
  /* line-height: 1.2; */
`;
const Image = styled.img`
  height: 500px;
  width: 500px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 350px;
    object-fit: contain;
  }
`;
