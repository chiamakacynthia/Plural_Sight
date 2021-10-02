import React from "react";
import styled from "styled-components";

const Top = () => {
  return (
    <Container>
      <Blur>
        <Article>Article</Article>
        <Bold>Cloud tracker</Bold>
        <Text>
          Join cloud strategist and Pluralsight author David Tucker for Cloud
          Tracker, your source for the the latest new
        </Text>
      </Blur>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  flex-wrap: wrap;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const Blur = styled.div`
  width: 400px;
  height: 300px;
  /* background-color: red; */
  background: rgba(34, 34, 34, 0.3);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 83vw;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 750px;
  height: 300px;
  padding: 20px;
  background-color: black;
  @media screen and (max-width: 768px) {
    width: 83vw;
  }
`;

const Article = styled.div`
  color: #df048c;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 10px 0px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const Text = styled.div`
  color: gray;
`;
