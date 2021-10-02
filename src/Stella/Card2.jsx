import React from "react";
import styled from "styled-components";
// import img1 from "images/aws.png";

import { AiOutlineRight } from "react-icons/ai";

const Card2 = ({ h, img, name, bold, w, text }) => {
  return (
    <CardHolder h={h} w={w}>
      <LogoText>
        <Logo src="images/aws.png" />
        {/* <Text>{name}</Text> */}
      </LogoText>
      <Bold>{bold}</Bold>
      <Text1>{text}</Text1>
      <Learn>
        Learn More{" "}
        <div>
          <AiOutlineRight />
        </div>
      </Learn>
    </CardHolder>
  );
};

export default Card2;

const CardHolder = styled.div`
  width: 100%;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  border-radius: 10px;
  color: white;
  min-width: 350px;
  min-height: 400px;

  @media screen and (max-width: 768px) {
    height: 100%;
    min-height: 200px;
  }
`;

const LogoText = styled.div`
  display: flex;
`;
const Logo = styled.img`
  width: 150px;
  height: 20px;
`;
const Text = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;

const Bold = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0px;
`;
const Text1 = styled.div`
  font-size: 16px;
`;
const Learn = styled.div`
  margin: 10px 0px;
  display: flex;
  font-weight: bold;
  div {
    color: #cb0081;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 3px;
  }
`;
