import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Burguer Fresh</h1>
          <img alt="logo" src={logo} />
        </Styled.LoginLogoContainer>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Entrar" size="large" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
