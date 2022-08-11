import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../contexts/auth";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };

      return axios
        .post(
          "https://blue-hamburgueria-production.up.railway.app/auth/login",
          data
        )
        .then((res) => {
          login({ token: res.data.token, user: res.data.user });
        })
        .catch(() => {
          toast.error("Usuário ou senha inválido");
        });
    }

    toast.error("Preencha os campos de Login");
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Burguer Fresh</h1>
          <img alt="logo" src={logo} />
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button text="Entrar" size="large" onClick={handleLogin} />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
