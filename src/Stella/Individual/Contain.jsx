import React from "react";
import styled from "styled-components";
import Props from "./Props";
import img from "../images/6p.png";
import img2 from "../images/7p.png";
import img3 from "../images/8p.png";
import img4 from "../images/9p.png";
import img5 from "../images/10p.png";

const Contain = () => {
  return (
    <Container>
      <Wrapper>
        <Props
          img={img}
          title="OVERVIEW"
          bold="Take control of your career"
          ques="What is skills?"
          text="Whether you want to transition into a new field, improve in your role or bring your big ideas to life, Pluralsight Skills can help you get there. With our technology skills platform, you can build in-demand skills and apply them in the real world with confidence."
        />
        <Props
          rw
          title="COURSE LIBRARY"
          bold="Learn from top technologists around the world"
          text="Keep your skills up-to-date with access to thousands of courses authored by an elite network of industry experts and partners."
          ques="Browse Our libraries"
          img={img2}
        />
        <Props
          title="SKILL ASSESSMENTS"
          bold="See where your skills stand and where you can grow"
          text="The best way to start learning is to see where your skills stand first. Take a quick skill assessment to uncover your strengths and weaknesses and get personalized recommendations on what to work on.  "
          img={img3}
        />
        <Props
          rw
          title="
        HANDS-ON LEARNING"
          bold="Practice applying new skills"
          text="With projects and interactive courses, you can test drive new skills in a risk-free environment and get guided feedback—so you can make mistakes before they matter. "
          img={img4}
        />
      </Wrapper>
      <Props
        title="CUSTOMER STORIES"
        text="Technology skills change lives. Hear veteran-turned-IT professional Ryan Chasteauneuf’s Pluralsight story. "
        bold="From soldier to IT specialist: Ryan's Pluralsight story"
        ques="Watch Ryan's story"
        img={img5}
      />
    </Container>
  );
};

export default Contain;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: #222222;
  border-radius: 10px;
`;
