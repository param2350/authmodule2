// Input.js
import React from "react";
import styled from "@emotion/styled";

const InputContainer = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #c1c1c1;
`;

const Input = ({ label, placeholder = "Enter", value, onChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
