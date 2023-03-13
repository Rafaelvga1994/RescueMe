import React from "react";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IPetsCard {
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

export interface iShelter {
  address: string;
  id: number;
  img: string;
  name: string;
  pets: IPetsCard[];
  state: string;
  telephone: number;
  userId: number;
}

export interface iCardShelter {
  imageShelter: string;
  shelterName: string;
  shelterCity: string;
  isAdmin: boolean;
  id: number;
}
export interface IAddShelter {
  name: string;
  address: string;
  state: string;
  img: string;
  telephone: number;
}
