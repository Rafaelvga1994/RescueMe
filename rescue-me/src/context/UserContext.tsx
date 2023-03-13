import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services";
import { iShelter } from "./@types";

export const UserContext = createContext({} as IUserContext);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdmin?: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  UserLogin: (formData: ILogin) => Promise<void>;
  UserRegister: (formData: IRegister) => Promise<void>;
  userLogout: () => void;
  userDeletShelter: (id: number) => Promise<void>;
  modalAddManipulation: () => void;
  addShelterModal: boolean;
  userNewShelter: (data: any) => void;
  setShelterList: React.Dispatch<React.SetStateAction<iShelter[] | undefined>>;
  shelterList: iShelter[] | undefined;
  setNoChangeShelterList: React.Dispatch<
    React.SetStateAction<iShelter[] | undefined>
  >;
  searchShelter: (data: any) => void;
  modalDeletManipulation: (id: any) => void;
  deletShelterModal: boolean;
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
  const [user, setUser] = useState<IUser | null>(null);
  const [shelterList, setShelterList] = useState<iShelter[]>();
  const [noChangeShelterList, setNoChangeShelterList] = useState<iShelter[]>();
  const [addShelterModal, setAddShelterModal] = useState(false);
  const [deletShelterModal, setDeletShelterModal] = useState(false);
  const Token = localStorage.getItem("@Token")!;
  const userID = localStorage.getItem("@USERID");
  const navigate = useNavigate();

  const modalAddManipulation = () => {
    setAddShelterModal((prev) => !prev);
  };
  const modalDeletManipulation = (id: any) => {
    setDeletShelterModal((prev) => !prev);
    if (deletShelterModal != true) {
      localStorage.setItem("@SHELTERID", id);
    }
  };
  const UserLogin = async (formData: ILogin) => {
    try {
      const response = await api.post<any>("/login", formData);
      console.log(response.data);
      localStorage.setItem("@Token", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@USERNAME", response.data.user.name);
      console.log(response.data);
      setUser(response.data.user);
      toast.success("Login Realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha invalido");
      console.log(error);
    }
  };
  const UserRegister = async (formData: IRegister) => {
    try {
      const response = api.post("/users", formData);
      setUser((await response).data.user);
      toast.success("Registro feito com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Usúario já cadastrado");
    }
  };
  const userDeletShelter = async (id: number) => {
    try {
      await api.delete<any>(`/locations/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      filterShelterList(id);
      toast.success("Deletado com sucesso!");
      modalDeletManipulation(id);
    } catch (error) {
      toast.error("Ops!");
      console.log(error);
    }
  };
  const userNewShelter = async (data: any) => {
    data["pets"] = [];
    data["userId"] = userID;
    try {
      const response = await api.post<any>(`/locations`, data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      console.log(response.data);
      toast.success("Criado com sucesso!");
      data["id"] = response.data.id;
      if (shelterList != undefined) {
        data["id"] = response.data.id;
        setShelterList([...shelterList, { ...data }]);
      }
      modalAddManipulation();
    } catch (error) {
      toast.error("Ops!");
      console.log(error);
    }
  };
  const searchShelter = (data: any) => {
    const filtredShelter = noChangeShelterList?.filter((shelter) =>
      shelter.name.includes(data.search)
    );
    if (filtredShelter != undefined) {
      setShelterList([...filtredShelter]);
    }
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    localStorage.removeItem("@SHELTERID");
    localStorage.removeItem("@USERNAME");
    localStorage.removeItem("@USERID");
    toast.success("Logout Realizado com sucesso!");
    navigate("/");
  };
  const filterShelterList = (data: any) => {
    const filtredShelter = noChangeShelterList?.filter(
      (shelter) => shelter.id != data
    );
    if (filtredShelter != undefined) {
      setShelterList([...filtredShelter]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        UserLogin,
        UserRegister,
        userLogout,
        userDeletShelter,
        modalAddManipulation,
        addShelterModal,
        userNewShelter,
        shelterList,
        setShelterList,
        setNoChangeShelterList,
        searchShelter,
        deletShelterModal,
        modalDeletManipulation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
