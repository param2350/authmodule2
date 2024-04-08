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

export const Subtitle = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 4px;
  padding: 0px;
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 0;
`;

export const TextButton = styled.button`
  border: none;
  background: white;
  text-transform: uppercase;
  font-weight: 600;
`;

export const LoginButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 16px;
`;
