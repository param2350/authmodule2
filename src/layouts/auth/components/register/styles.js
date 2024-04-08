import styled from "@emotion/styled";
import Button from "../../../../components/button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px 10px;
`;

export const FormContainer = styled.div`
  border: 1px solid #c1c1c1;
  padding: 30px;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const TextButton = styled.button`
  border: none;
  background: white;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SignupButton = styled(Button)`
  margin-top: 20px;
`;
