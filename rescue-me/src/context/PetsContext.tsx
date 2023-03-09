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

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2NzgzMjAyNDQsImV4cCI6MTY3ODMyMzg0NCwic3ViIjoiNCJ9.az-xTnC3foUCZrcsMVE5wtglaDhZ2mKwmP65g28TZkM";

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
      }}
    >
      {children}
    </PetsContex.Provider>
  );
};
