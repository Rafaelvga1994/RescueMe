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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2NzgzMjI1NDAsImV4cCI6MTY3ODMyNjE0MCwic3ViIjoiNCJ9.S4EfpV7uSaw__4AtY2_tvdr4OCdM8G_ymd8bOF-L5Hg";

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
