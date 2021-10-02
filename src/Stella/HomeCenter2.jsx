import React from "react";
import styled from "styled-components";
// import img1 from "images/1p.png";
// import img from "../images/logo-skills.png";
// import Card2 from "./Card2"
// import img3 from "images/3p.jpg";
// import img2 from "images/2p.jpg";
// import img4 from "images/4.jpg";
import MyCard from "./MyCard";

const HomeCenter2 = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Keep up to date</Text>
        <Bold>Discover more about Pluralsight</Bold>
      </Wrapper>
      <CardHolder>
        <MyCard
          title="CLOUD RULES EVERYTHING
AROUND ME"
          text="Learn more about the future of cloud and cloud learning directly from Pluralsight and A Cloud Guru experts."
         src="images/1p.png"
        />
        <MyCard
          title="WHAT IS PLURALSIGHT SKILLS?"
          text="Discover the fastest, most effective path to developing technology skills."
        src="images/skill.jpg"
        />
        <MyCard
          title="CREATE YOUR FREE ACCOUNT"
          text="Build new tech skills on us with free access to 50+ expert-led courses, assessments and more."
         src="images/3p.jpg"
        />
        <MyCard
          title="TECHNOLOGY SKILL DEVELOPMENT: THE STRATEGY FOR BUILDING BETTER TEAMS"
          text="Learn how to build tailored strategies to upskill your teams, build innovative products faster and gain a competitive advantage. "
         src="images/4.jpg"
        />
      </CardHolder>
    </Container>
  );
};

export default HomeCenter2;

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  /* align-items:center; */
  /* height:100%; */
`;

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  color: white;
`;
const Wrapper = styled.div``;
const Text = styled.div`
  color: #cb0081;
  display: flex;
  padding: 10px;
`;

const Bold = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
`;
