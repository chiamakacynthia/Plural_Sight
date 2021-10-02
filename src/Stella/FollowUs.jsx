import React from "react";
import styled from "styled-components";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";

const FollowUs = () => {
  return (
    <Container>
      <Text>Follow us</Text>
      <Bold>Share your skills</Bold>
      <Wrapper>
        <Left>
          <AiOutlineLeft />
        </Left>
        <Center>
          <Card>
            <Hold>
              <Avatar />
              <T>
                <Name>lifelong </Name>
                <NName>lifelong dream </NName>
              </T>
              <Icon>
                <AiOutlineTwitter />
              </Icon>
            </Hold>
            <MyText>
              lifelong dream and start over. Driven to achieve in the face of
              adversity, he turned to Pluralsight to upskill.
            </MyText>
            <Icons></Icons>
          </Card>
          <Card>
            <Hold>
              <Avatar />
              <T>
                <Name>lifelong </Name>
                <NName>lifelong dream </NName>
              </T>
              <Icon>
                <AiOutlineTwitter />
              </Icon>
            </Hold>
            <MyText>
              lifelong dream and start over. Driven to achieve in the face of
              adversity, he turned to Pluralsight to upskill.
            </MyText>
            <Icons></Icons>
          </Card>
        </Center>
        <Right>
          <AiOutlineRight />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default FollowUs;

const Icons = styled.div``;

const Left = styled.div`
  font-size: 35px;
`;
const Right = styled.div`
  font-size: 35px;
`;
const Center = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
  /* background-color: aliceblue; */
`;
const Card = styled.div`
  width: 500px;
  background-color: white;
  min-height: 200px;
  padding: 20px;
  border-radius: 10px;
  margin-left: 10px;
`;

const Hold = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
`;
const T = styled.div`
  flex: 1;
  margin-left: 5px;
`;
const Name = styled.div`
  color: black;
  font-weight: bold;
`;
const NName = styled.div`
  color: gray;
  font-size: 20px;
`;
const Icon = styled.div`
  color: blue;
  width: 60px;
`;
const MyText = styled.div`
  color: black;
  font-size: 14px;
  margin-top: 10px;
`;

const Container = styled.div`
  background-color: black;
  height: 85vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
  /* height: 100%; */
`;

const Text = styled.div`
  color: #cb0081;
  display: flex;
  margin: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Bold = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
  font-size: 25px;
`;
