import React from "react";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IPetsCart {
  name: string;
  img: string;
  type: string;
  status: string;
  userId: number;
}

export interface IPetsContext {
  pets: IPetsDescript[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenTwo: boolean;
  isOpenThree: boolean;
  setIsOpenThree: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenTwo: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPetsDescript {
  name: string;
  img: string;
  type: string;
  status: string;
  userId: number;
}
