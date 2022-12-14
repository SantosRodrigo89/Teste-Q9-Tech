import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Main = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e5e9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: auto;
    height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 80%;
  justify-content: space-evenly;
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    background-color: #ffc501;
    width: 100%;
  }
`;

export const InputMaterial = styled(TextField)`
  width: 100%;
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
