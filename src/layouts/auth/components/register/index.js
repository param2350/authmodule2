import React, { useState } from "react";
import Input from "../../../../components/input/index";

import {
  Container,
  FormContainer,
  Title,
  TextButton,
  SignupButton,
  Text,
} from "./styles";

const TEXT = {
  TITLE: "Create your account",
  NAME_LABEL: "Name",
  EMAIL_LABEL: "Email",
  PASSWORD_LABEL: "Password",
  CREATE_ACCOUNT_BUTTON: "Create Account",
  HAVE_ACCOUNT_TEXT: "Have an Account?",
  LOGIN_BUTTON: "Login",
};

const Signup = ({ onSwitch, onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    onSignUp(name, email, password);
  };

  return (
    <Container>
      <FormContainer>
        <Title>{TEXT.TITLE}</Title>

        <Input
          label={TEXT.NAME_LABEL}
          value={name}
          onChange={handleNameChange}
        />
        <Input
          label={TEXT.EMAIL_LABEL}
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          label={TEXT.PASSWORD_LABEL}
          value={password}
          onChange={handlePasswordChange}
        />

        <SignupButton
          text={TEXT.CREATE_ACCOUNT_BUTTON}
          onClick={handleSubmit}
        />

        <Text>
          {TEXT.HAVE_ACCOUNT_TEXT}{" "}
          <TextButton type="button" onClick={onSwitch}>
            {TEXT.LOGIN_BUTTON}
          </TextButton>
        </Text>
      </FormContainer>
    </Container>
  );
};

export default Signup;
