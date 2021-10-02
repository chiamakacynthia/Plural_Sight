import React from "react";
import styled from "styled-components";
// import img1 from "../images/aws.png";
// import img from "../images/logo-skills.png";
import Card2 from "./Card2";
// import img2 from "../images/prep.png";
// import img3 from "../images/del.png";
// import img4 from "../images/sand.png";

const Center = () => {
  return (
    <HoldAll>
      <HoldC>
        <Card2
          bold="Empower your teams to grow their skills and their careers"
          text="Prepare your team for certification exams with our expert authored content and practice exams."
          src="images/prep.png"
        />
      </HoldC>

      <HoldC>
        <Card2
          bold="Make lasting workflow improvements with insights from your Jira data"
          text="Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow."
          src="images/del.png"
        />
      </HoldC>

      <HoldC>
        <Card2
          bold="Utilize a space for unrestricted exploration"
          text="Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses."
          src="images/sand.png"
        />
      </HoldC>
    </HoldAll>
  );
};

export default Center;

const HoldAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #181818;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    /* height: 100%; */
  }
`;

const HoldC = styled.div`
  width: 300px;
  min-height: 400px;
  height: 100%;
  display: flex;
  /* margin: 10px; */

  @media screen and (max-width: 768px) {
    width: 90%;
    /* height: 100%; */
  }
`;
