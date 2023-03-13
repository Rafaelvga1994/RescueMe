import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services";
import { IDefaultProviderProps, IPetsContext, IPetsDescript } from "./@types";

export const PetsContex = createContext({} as IPetsContext);

export const CreatePetsProviders = ({ children }: IDefaultProviderProps) => {
  const [pets, setPets] = useState<IPetsDescript[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTwo, setIsOpenTwo] = useState<boolean>(false);
  const [isOpenThree, setIsOpenThree] = useState<boolean>(false);
  const [editingPets, setEditingPets] = useState<IPetsDescript>(
    {} as IPetsDescript
  );

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg3MTUzOTYsImV4cCI6MTY3ODcxODk5Niwic3ViIjoiMiJ9.01tIHClPmkzIIAW4Qa3BPxTQP9Eq8hPXkmd-cc15M-M";

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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg3MTUzOTYsImV4cCI6MTY3ODcxODk5Niwic3ViIjoiMiJ9.01tIHClPmkzIIAW4Qa3BPxTQP9Eq8hPXkmd-cc15M-M";

    try {
      const response = await api.patch(`/locations/${id}`, formData, {
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg3MTUzOTYsImV4cCI6MTY3ODcxODk5Niwic3ViIjoiMiJ9.01tIHClPmkzIIAW4Qa3BPxTQP9Eq8hPXkmd-cc15M-M";

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
