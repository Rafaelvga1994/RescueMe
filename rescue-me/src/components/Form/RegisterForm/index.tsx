import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { Input } from "../input";
import { IRegister, UserContext } from "../../../context/UserContext";

const schema = yup.object({
  name: yup.string().required("O nome é Obrigatório "),
  email: yup.string().required("O email é Obrigatório "),
  password: yup.string().required("A senha é Obrigatória "),
  confirmPassword: yup
    .string()
    .required("A Senha precisa ser igual")
    .oneOf([yup.ref("password")], "A Senha precisa ser igual"),
});

export const RegisterForm = () => {
  const { UserRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema) });

  const registerSubtmit: SubmitHandler<IRegister> = (formData) => {
    UserRegister(formData);
  };
  return (
    <form onSubmit={handleSubmit(registerSubtmit)}>
      <Input
        type="text"
        label="Digite o seu nome"
        register={register("name")}
        error={(errors as Record<string, FieldError>).name}
      />
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
      <Input
        type="password"
        label="Confirme a sua senha"
        register={register("confirmPassword")}
        error={(errors as Record<string, FieldError>).confirmPassword}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};
