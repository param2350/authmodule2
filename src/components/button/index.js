// Button.js
import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    background-color: #333333;
  }
`;

const Button = ({ text, onClick, className = "" }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
