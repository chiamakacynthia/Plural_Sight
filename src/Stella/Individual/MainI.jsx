import React from "react";
import styled from "styled-components";
import Top from "../Individual/Top";
import Contain from "./Contain";
import Props from "./Props";
import VideoMain from "./VideoMain";
import VideoProps from "./VideoProps";


const MainI = () => {
  return (
    <Container id="Individual">
      <Top />
      <VideoMain />

      <Contain />
    </Container>
  );
};

export default MainI;

const Container = styled.div``;
const Wrapper = styled.div``;
