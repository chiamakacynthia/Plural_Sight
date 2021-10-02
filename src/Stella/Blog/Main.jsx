import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import HeaderV from "./HeaderV";
import HoldCards from "./HoldCards";
import SubHeaderProps from "./SubHeaderProps";
import Top from "./Top";

const Main = () => {
  return (
    <Container id="Blog">
      <HeaderV />
      <Top />
      <HoldCards />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  background-color: #171717;
  height: 100%;
`;
const Wrapper = styled.div``;
