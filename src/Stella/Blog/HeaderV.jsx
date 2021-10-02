import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const HeaderV = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Text>Explore Technology</Text>
          <Text>Build better teams</Text>
          <Text>Make the most of our platform</Text>
          <Text>See what we are up to</Text>
        </Wrapper>
        <MenuWrapper>
          <MenuText>Menu</MenuText>
          <Icon onClick={toggle}>
            {show ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </Icon>
        </MenuWrapper>
      </Container>
      {show ? (
        <Fade up>
          <Holder>
            <TextM>Explore Technology</TextM>
            <TextM>Build better teams</TextM>
            <TextM>Make the most of our platform</TextM>
            <TextM>See what we are up to</TextM>
          </Holder>
        </Fade>
      ) : null}
    </>
  );
};

export default HeaderV;

const Holder = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  height: 50vh;
  border-top: 1px solid gray;
  color: white;
  position: absolute;
  flex-direction: column;
  top: 70px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TextM = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MenuText = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 40px;
`;
const Icon = styled.div`
  margin-right: 40px;
  font-size: 35px;
  cursor: pointer;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  /* font-size: 20px; */
`;
