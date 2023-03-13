import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { Input } from "../input";
import { ILogin, UserContext } from "../../../context/UserContext";
import { api } from "../../../services";
import { StyledForm } from "../styled";
import { StyledDiv } from "./styled";
import imgLogin from "../../../assets/ImgLogin.png";

const schema = yup.object({
  email: yup.string().required("O email é Obrigatório "),
  password: yup.string().required("A senha é Obrigatória "),
});

export const LoginForm = () => {
  const { UserLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit(UserLogin)} noValidate>
        <div className="container">
          <h4>Login</h4>
          <Input
            type="email"
            label="Email"
            register={register("email")}
            error={(errors as Record<string, FieldError>).email}
          />
          <Input
            type="password"
            label="Senha"
            register={register("password")}
            error={(errors as Record<string, FieldError>).password}
          />
          <button type="submit" className="btnEnterLogin">
            Entrar
          </button>
          <p className="first--paragraph">Ainda não possui conta? </p>
          <p className="second--paragraph">
            Clicando no botão abaixo, você pode se cadastrar rapidamente
          </p>
          <button type="submit" className="btnRegisterLogin">
            Cadastrar
          </button>
        </div>
      </StyledForm>
      <img src={imgLogin} alt="LoginImg" />
    </StyledDiv>
  );
};
