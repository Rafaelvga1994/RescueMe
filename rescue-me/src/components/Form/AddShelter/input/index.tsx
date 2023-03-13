import "react-hook-form";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FildSetStyled } from "./style";

interface IInputProps {
  label: string;
  type: "address" | "img" | "state" | "telephone" | "" | "name";
  register: UseFormRegisterReturn<string>;
  value?: string | number;
  error?: FieldError | undefined;
}

export const Input = ({ label, type, register, error, value }: IInputProps) => {
  const errorMessage = error?.message;
  return (
    <FildSetStyled>
      <label htmlFor={type}>{label}</label>
      <input type={type} {...register} value={value} />
      {errorMessage && <p>{errorMessage}</p>}
    </FildSetStyled>
  );
};
