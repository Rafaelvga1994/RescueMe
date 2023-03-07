import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { Input } from "../input";
import { ILogin, UserContext } from "../../../context/UserContext";

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

  const loginSubtmit: SubmitHandler<ILogin> = (formData) => {
    UserLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(loginSubtmit)}>
      <Input
        type="email"
        label="Digite o seu email"
        register={register("email")}
        error={(errors as Record<string, FieldError>).email}
      />
      <Input
        type="password"
        label="Digite o sua senha"
        register={register("password")}
        error={(errors as Record<string, FieldError>).password}
      />
      <button>Entrar</button>
    </form>
  );
};
