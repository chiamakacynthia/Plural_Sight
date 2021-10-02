import React from "react";
import styled from "styled-components";
import VideoProps from "./VideoProps";

const VideoMain = () => {
  return (
    <Container>
      <Block>Serious skills. Simple pricing. See plans ></Block>
      <Text>Trending</Text>
      <Wrapper>
        <VideoProps />
        <VideoProps />
        <VideoProps />
        <VideoProps />
      </Wrapper>
    </Container>
  );
};

export default VideoMain;

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  font-weight: bold;
  margin: 10px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Block = styled.div`
  background: linear-gradient(90deg, #f05034, #ee295f);
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;
