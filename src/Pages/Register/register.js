import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { goToList } from "../../Routes/coordinator";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const onSubimitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
    };
    emailApi(userLogin);
  };

  const emailApi = async (body) => {
    await axios 
      .post(`${BASE_URL}/register`, body )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        alert("Usuário cadastrado com sucesso!");
        goToList(navigate)
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }

  return (
   <Main>
    <h1> Informe um email para cadastro </h1>

<Form onSubmit={onSubimitLogin}>
        <InputMaterial
          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <ButtonStyled type="submit">Enviar</ButtonStyled>
        </Form>

   </Main>
  );
};
export default Register;
