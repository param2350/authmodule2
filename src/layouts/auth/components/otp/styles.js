import styled from "@emotion/styled";
import Button from "../../../../components/button";

export const Container = styled.div`
  box-sizing: border-box;
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
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  width: ${(props) =>
    `calc((100% - ${(props.count - 1) * 5 + 60}px) / ${props.count})`};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  margin-left: 0;
`;

export const VerifyButton = styled(Button)`
  margin-top: 20px;
`;
