import "react-hook-form";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "confirmPassword";
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

export const Input = ({ label, type, register, error }: IInputProps) => {
  const errorMessage = error?.message;
  return (
    <StyledFieldset>
      <label htmlFor={type}>{label}</label>
      <input type={type} {...register} />
      {errorMessage && <p>{errorMessage}</p>}
    </StyledFieldset>
  );
};
