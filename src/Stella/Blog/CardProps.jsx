import React from "react";
import styled from "styled-components";

const CardProps = ({ text, bold, img, wd }) => {
  return (
    <Container>
      <Wrapper wd={wd} src={img} />
      <Blur wd={wd}>
        <Article>Article</Article>
        <Bold>{bold}</Bold>
        <Text>{text}</Text>
      </Blur>
    </Container>
  );
};

export default CardProps;

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  padding-top: 10px;
  flex-wrap: wrap;
  color: white;
  flex-direction: column;

  /* @media screen and (max-width: 768px) {
    /* align-items: center; */
  
`;
const Blur = styled.div`
  width: ${({ wd }) => (wd ? "500px" : "350px")};
  height: 200px;
  /* background-color: red; */
  background: rgba(34, 34, 34, 0.3);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px;
  
  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top:20px;
    /* height: 100%; */
  } 
`;
const Wrapper = styled.img`
  width: ${({ wd }) => (wd ? "500px" : "350px")};
  height: 200px;
  padding: 20px;
  background-color: black;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Article = styled.div`
  color: #df048c;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const Text = styled.div`
  color: gray;
`;
