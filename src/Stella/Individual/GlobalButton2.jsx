import React from "react";
import styled from "styled-components";

const GlobalButton2 = ({ text }) => {
  return <Button>{text}</Button>;
};

export default GlobalButton2;

const Button = styled.div`
  height: 50px;
  width: 200px;
  background: linear-gradient(90deg, #f05034, #ee295f);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: all 350ms;

  margin: 10px;
  transform: scale(1);
  &:hover {
    background: linear-gradient(90deg, #ee295f, #f05034);
  }
`;
