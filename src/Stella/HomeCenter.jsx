import React from "react";
import styled from "styled-components";
// import img1 from "../images/aws.png";
import Card2 from "./Card2";
// import img2 from "../images/logo-skills.png";

const HomeCenter = () => {
  return (
    <Container>
      <Wrapper>
        <Text>SEE WHAT'S NEW</Text>
        <Bold>Our latest features</Bold>
        <Holder>
          <Hold1>
            <Card2
              w
              name="LABS"
              bold="Create better cloud outcomes with hands-on experience
          "
              text="Your teams need the right skills and a place to practice to ensure they’re ready to deliver on your cloud objectives. Labs enable learners to get hands-on practice in a provisioned cloud environment in AWS, Azure and Google Cloud (Google Cloud powered by Quiklabs)."
              b="Create better cloud outcomes with hands-on experience"
              src="images/logo-skills.png"
            />
          </Hold1>
          <Image src="images/aws.png" />
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomeCenter;

const HoldAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Hold1 = styled.div`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
const HoldC = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  background-color: blue;
  @media screen and (max-width: 768px) {
    width: 90%;
    /* margin-top: 20px; */
  }
`;

const Container = styled.div`
  padding-top: 20px;
  background-color: #181818;
  color: white;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div``;
const Text = styled.div`
  color: #cb0081;
  display: flex;
  margin: 10px;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  flex-wrap: wrap;
`;
const Bold = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
  margin-left: 55px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
