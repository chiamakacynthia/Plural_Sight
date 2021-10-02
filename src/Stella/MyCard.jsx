import React from "react";
import styled from "styled-components";
// import img1 from "images/aws.png";
// import img from "../images/logo-skills.png";
// import Card2 from "./Card2";
// import img2 from "../images/logo-skills.png";

const MyCard = ({ title, text, img }) => {
  return (
    <Card>
      <Image src={img} />
      <Text2>{title}</Text2>
      <Text3>{text}</Text3>
    </Card>
  );
};

export default MyCard;

const Card = styled.div`
  width: 250px;
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  /* margin: 20px; */
  padding: 10px;
  /* background-color: red; */
`;
const Image = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;
const Text2 = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0px;
  color: #ffba0e;
`;
const Text3 = styled.div`
  margin: 10px 0px;
`;
