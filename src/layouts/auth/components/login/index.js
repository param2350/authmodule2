import React, { useState } from "react";
import Input from "../../../../components/input/index";

import {
  Container,
  FormContainer,
  Title,
  Subtitle,
  Text,
  TextButton,
  LoginButton,
} from "./styles";

// Constants for hard-coded text
const TEXT = {
  TITLE: "Login",
  SUBTITLE: "Welcome back!",
  TEXT: "Please login to your account.",
  EMAIL_LABEL: "Email",
  PASSWORD_LABEL: "Password",
  LOGIN_BUTTON: "Login",
  DONT_HAVE_ACCOUNT_TEXT: "Don't have an Account?",
  SIGNUP_BUTTON: "Sign up",
};

const Login = ({ onSwitch, onLoginClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    // Validate input
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Submit validated input to callback function
    onLoginClick(email, password);
  };

  return (
    <Container>
      <FormContainer>
        <Title>{TEXT.TITLE}</Title>
        <Subtitle>{TEXT.SUBTITLE}</Subtitle>
        <Text>{TEXT.TEXT}</Text>

        <Input
          label={TEXT.EMAIL_LABEL}
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          label={TEXT.PASSWORD_LABEL}
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <LoginButton text={TEXT.LOGIN_BUTTON} onClick={handleLoginClick} />

        <Text>
          {TEXT.DONT_HAVE_ACCOUNT_TEXT}{" "}
          <TextButton type="button" onClick={onSwitch}>
            {TEXT.SIGNUP_BUTTON}
          </TextButton>
        </Text>
      </FormContainer>
    </Container>
  );
};

export default Login;
