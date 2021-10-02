import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../Individual/GlobalButton2";
// import img from "../images/bgl.png";
import img2 from "../images/logo-skills.png";
import { AiOutlineRight } from "react-icons/ai";

const Props = ({ rw, title, bold, text, img, ques }) => {
  return (
    <Container rw={rw}>
      <Wrapper>
        <Title>{title}</Title>
        <Bold>{bold}</Bold>
        <Text1>{text}</Text1>
        <QUest>
          {ques}
          <div>
            <AiOutlineRight />
          </div>
        </QUest>
      </Wrapper>
      <Image src={img} />
    </Container>
  );
};

export default Props;

const QUest = styled.div`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  div {
    color: #e40084;
    margin-left: 5px;
    margin-top: 3px;
    /* align-items: center; */
  }
`;

const Container = styled.div`
  /* background-color: #222222; */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
  flex-direction: ${({ rw }) => (rw ? "row-reverse" : "")};
`;
const Wrapper = styled.div`
  width: 600px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: #e40084;
  text-transform: uppercase;
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-left: 5px;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;
  margin: 10px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  margin: 20px 0px;
  /* line-height: 1.2; */
`;
const Image = styled.img`
  height: 300px;
  width: 400px;
  object-fit: contain;
`;
