import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import SubHeaderProps from "./SubHeaderProps";

const HoldCards = () => {
  return (
    <Container>
      <Wrapper>
        <CardProps img = "1p.jpg" bold = "Pluralsight Expands Hands-On Learning Opportunities With New Skills Capabilities" />
        <CardProps img = "2p.png" bold = "The 10 most binged technology courses during COVID-19" text= "These are the most viewed courses, paths and assessments in the year since COVID-19 forced a large part of the"/>
        <CardProps img = "3p.png" bold = "The state of tech: 4 tough questions about change in the shadow of COVID-19" text= "Technology experts discuss COVID-19’s lingering impact on the way we work, the biggest issues and opportunities the..."/>
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
  margin:20px 0px;
  z-index:-1;
`;
