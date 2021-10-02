import React from "react";
import styled from "styled-components";

const VideoProps = () => {
  return (
    <Container>
      <Video src="" autoPlay={true} playsInline={true} type="video/mp4" />
      <Holder>
        <Course>Course</Course>
        <Text></Text>
        <All>
          <span>Sander Mak</span>
          <span>Intermediate</span>
          <span>1h 7m</span>
        </All>
      </Holder>
    </Container>
  );
};

export default VideoProps;

const Container = styled.div`
  min-height: 300px;
  width: 300px;
  background-color: #181818;
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
`;
const Video = styled.video`
  height: 200px;
  width: 100%;
`;
const Holder = styled.div`
  width: 280px;
`;
const Course = styled.div`
  color: #e6078f;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const All = styled.div`
  font-size: 11px;
  color: gray;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
