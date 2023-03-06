import React, { createContext, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { useFormState } from "react-hook-form/dist/useFormState";
import { toast } from "react-toastify";
import { api } from "../services";

export const UserContext = createContext({} as IUserContext);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserContext {
  user: IUser | null;
  setUser:  React.Dispatch<React.SetStateAction<IUser | null>>;
  UserLogin: (formData: ILogin) => Promise<void>;
  UserRegister: (formData: IRegister) => Promise<void>;
  userLogout: () => void;
  Token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useFormState<IUser | null>(null);
  const Token = localStorage.getItem("@Token")!;
  //   const navigate = useNavigate();

  const UserLogin = async (formData: ILogin) => {
    try {
      const response = api.post("/login", formData);
      setUser(await response);
      //   localStorage.setItem('@Token', (await response).data.accessToken);
      toast.success("Login Realizado com sucesso!");
      //   navigate('/dashborn');
    } catch (error) {
      toast.error("Email ou senha invalido");
    }
  };
  const UserRegister = async (formData: IRegister) => {
    try {
      const response = api.post("/users", formData);
      setUser((await response).data.user);
      localStorage.setItem("@Token", (await response).data);
      toast.success("Registro feito com sucesso!");
      //   navigate('/');
    } catch (error) {
      toast.error("Usúario já cadastrado");
    }
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    toast.success("Logout Realizado com sucesso!");
    // navigate('/');
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, UserLogin, UserRegister, userLogout, Token }}
    >
      {children}
    </UserContext.Provider>
  );
};
