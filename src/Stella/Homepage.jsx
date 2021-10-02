import React from "react";
import styled from "styled-components";
import HomeTop from "./HomeTop";
import HomeTop2 from "./HomeTop2";
// import img from "../images/js.png";
import HomeCenter from "./HomeCenter";
import HomeCenter2 from "./HomeCenter2";
import Center from "./Center";
import ImagePart from "./ImagePart";
import FollowUs from "./FollowUs";
import Insight from "./Insight";

const Homepage = () => {
  return (
    <Container>
      <HomeTop />
      <HomeTop2 />
      <HomeCenter />
      <Center />
      <HomeCenter2 />
      <ImagePart />
      <FollowUs />
      <Insight />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  color: white;
`;
const Wrapper = styled.div``;
