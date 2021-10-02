import React from "react";
import styled from "styled-components";

const Insight = () => {
  return (
    <Container>
      <Wrapper>Insights that give you an edge</Wrapper>
      <Button>Try for free</Button>
    </Container>
  );
};

export default Insight;

const Container = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: #181818;
  /* margin: -10px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const Button = styled.div`
  height: 50px;
  width: 200px;
  background: linear-gradient(90deg, #f05034, #ee295f);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: all 350ms;

  margin: 10px;
  transform: scale(1);
  &:hover {
    background: linear-gradient(90deg, #ee295f, #f05034);
  }
`;
