// OTP.js
import React, { useState, useRef } from "react";

import {
  Container,
  FormContainer,
  Title,
  Subtitle,
  Label,
  InputContainer,
  Input,
  VerifyButton,
} from "./styles";

const OTP = ({ otpLength = 6, onClick }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (index < 5 && value !== "") {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    // Handle OTP verification
    const otpCode = otp.join("");
    onClick(otpCode);
  };

  return (
    <Container>
      <FormContainer>
        <Title>Verify your email</Title>
        <Subtitle>
          Enter the 6 digit code you have received on anu***@gmail.com
        </Subtitle>

        <Label htmlFor="otp-input">Code</Label>
        <InputContainer>
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="tel"
              maxLength={1}
              value={digit}
              onChange={(event) => handleInputChange(index, event)}
              id={`otp-input-${index}`}
              count={otpLength}
            />
          ))}
        </InputContainer>

        <VerifyButton text="Verify" onClick={handleVerify} />
      </FormContainer>
    </Container>
  );
};

export default OTP;
