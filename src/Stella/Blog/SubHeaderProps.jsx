import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

const SubHeaderProps = ({ text, bg, clr, g, b, y, p }) => {
  return (
    <Container>
      <Wrapper>{text}</Wrapper>
      <Line>
        <Line1 g={g} b={b} y={y} p={p} />
        <Line2 />
      </Line>
      <Text g={g} b={b} y={y}>
        See all{" "}
        <div>
          <AiOutlineRight />
        </div>
      </Text>
    </Container>
  );
};

export default SubHeaderProps;

const Container = styled.div`
  width: 100%;
  display: flex;
  color: white;
  margin: 10px 0px;
  /* background-color: blue; */
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  font-size: 30px;
  padding: 0px 20px;
`;

const Line = styled.div`
  display: flex;
  margin: 0px 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Line1 = styled.div`
  height: 2px;
  width: 300px;
  background-color: ${({ g, b, y, p }) =>
    g ? "#4CB272" : b ? "#0084BD" : y ? "#F7A614" : p ? "#F15B2A" : null};
`;
const Line2 = styled.div`
  height: 2px;
  width: 600px;
  background-color: gray;
`;
const Text = styled.div`
  margin-right: 10px;
  display: flex;
  color: ${({ g, b, y, p }) =>
    g ? "#4CB272" : b ? "#0084BD" : y ? "#F7A614" : p ? "#F15B2A" : null};
  div {
    font-size: 14px;
    margin: 3px;
  }
`;
