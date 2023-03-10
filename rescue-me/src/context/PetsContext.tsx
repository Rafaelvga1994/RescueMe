import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { string } from "yup";
import { api } from "../services";
import {
  IDefaultProviderProps,
  IDescriptEditPets,
  IPetsContext,
  IPetsDescript,
} from "./@types";

export const PetsContex = createContext({} as IPetsContext);

export const CreatePetsProviders = ({ children }: IDefaultProviderProps) => {
  const [pets, setPets] = useState<IPetsDescript[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTwo, setIsOpenTwo] = useState<boolean>(false);
  const [isOpenThree, setIsOpenThree] = useState<boolean>(false);
  const [isOpenFour, setIsOpenFour] = useState<boolean>(false);
  const [editingPets, setEditingPets] = useState<IDescriptEditPets>(
    {} as IDescriptEditPets
  );

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg0NDk4NzcsImV4cCI6MTY3ODQ1MzQ3Nywic3ViIjoiNSJ9.KCE5RB5GmXksc9FYXFBh1fY5K38nNuDA-4Q7bGb8Ktg";

    async function importPetsFromCard() {
      try {
        const response = await api.get("/locations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPets(response.data);
      } catch (error) {}
    }
    importPetsFromCard();
  }, []);

  async function EditPetsCard(formData: any, id: string) {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.put(`/locations/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });

      const newPetCard = pets.map((pet) => {
        if (id == pet.id) {
          return { ...pet, ...formData };
        } else {
          return pet;
        }
      });

      setPets(newPetCard);
    } catch (error) {}
  }

  async function DeletePetsCard(id: string) {
    const token = localStorage.getItem("@TOKEN");

    try {
      const headers = {
        Authorization: `Bearer ${token} `,
      };
      await api.delete(`/locations/${id}`, { headers });

      const deletePet = pets.filter((pet) => pet.id !== id);
      setPets(deletePet);
    } catch (error) {}
  }

  return (
    <PetsContex.Provider
      value={{
        pets,
        isOpen,
        setIsOpen,
        isOpenTwo,
        setIsOpenTwo,
        isOpenThree,
        setIsOpenThree,
        isOpenFour,
        setIsOpenFour,
        EditPetsCard,
        DeletePetsCard,
        editingPets,
        setEditingPets,
      }}
    >
      {children}
    </PetsContex.Provider>
  );
};
