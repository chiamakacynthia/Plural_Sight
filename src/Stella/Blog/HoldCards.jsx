import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import SubHeaderProps from "./SubHeaderProps";

const HoldCards = () => {
  return (
    <Container>
      <Wrapper>
        <CardProps />
        <CardProps />
        <CardProps />
        <SubHeaderProps g text="Explore technology" />
      </Wrapper>
      <Wrapper>
        <CardProps />
        <CardProps />
        <CardProps />
        <SubHeaderProps b text="Build better team" />
      </Wrapper>
      <Wrapper>
        <CardProps wd />
        <CardProps wd />
      </Wrapper>
    </Container>
  );
};

export default HoldCards;

const Container = styled.div`
  margin: 20px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;
