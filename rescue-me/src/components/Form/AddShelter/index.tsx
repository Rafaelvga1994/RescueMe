import { Input } from "./input";
import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import { EditFormStyledDiv } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { IAddShelter } from "../../../context/@types";

export function AddSheltForm() {
  const schema = yup.object({
    name: yup.string().required("O nome é Obrigatório "),
    address: yup.string().required("O endereço é obrigatório "),
    state: yup.string().required("O estado é obrigatorio "),
    img: yup.string().required("A imagem é obrigatória"),
    telephone: yup
      .string()
      .required("O telefone é obrigatório ")
      .matches(/^[0-9]+$/, "Deve conter apenas numeros."),
  });

  const { userNewShelter } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddShelter>({ resolver: yupResolver(schema) });
  const submit: SubmitHandler<IAddShelter> = (data) => {
    userNewShelter(data);
  };
  return (
    <EditFormStyledDiv onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome do abrigo"
        type="name"
        register={register("name")}
        error={(errors as Record<string, FieldError>).name}
      />
      <Input
        label="Endereço"
        type="address"
        register={register("address")}
        error={(errors as Record<string, FieldError>).address}
      />
      <Input
        label="Cidade-UF"
        type="state"
        register={register("state")}
        error={(errors as Record<string, FieldError>).state}
      />
      <Input
        label="Link da Imagem"
        type="img"
        register={register("img")}
        error={(errors as Record<string, FieldError>).img}
      />
      <Input
        label="Contato"
        type="telephone"
        register={register("telephone")}
        error={(errors as Record<string, FieldError>).telephone}
      />
      <button type="submit">Criar</button>
    </EditFormStyledDiv>
  );
}
