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
  EditPetsCard(formData: any, id: string): Promise<void>;
  DeletePetsCard(id: string): Promise<void>;
  editingPets: IPetsDescript;
  setEditingPets: React.Dispatch<React.SetStateAction<IPetsDescript>>;
}

export interface IPetsDescript {
  id: string;
  name: string;
  img: string;
  type: string;
  status: string;
  userId: number;
  address: string;
  telephone: string;
  state: string;
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
}
