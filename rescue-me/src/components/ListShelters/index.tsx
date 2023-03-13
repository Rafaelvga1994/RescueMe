import { ListShelterContainerStyled } from "./style";
import { CardShelter } from "./CardShelter";
import { api } from "../../services";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { IPetsCard } from "../../context/@types";
import { iShelter } from "../../context/@types";
import { IUser, UserContext } from "../../context/UserContext";

export function ListShelter() {
  const { setShelterList, shelterList, setNoChangeShelterList } =
    useContext(UserContext);
  const token = localStorage.getItem("@Token")!;

  useEffect(() => {
    async function listShelterAPI(token: string) {
      const response = await api.get("/locations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      try {
        setShelterList(response.data);
        setNoChangeShelterList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listShelterAPI(token);
  }, []);

  return (
    <ListShelterContainerStyled>
      <ul className="ListShelter">
        {shelterList?.map((shelter) => (
          <li>
            <CardShelter
              imageShelter={shelter.img}
              shelterName={shelter.name}
              shelterCity={shelter.state}
              isAdmin={true}
              id={shelter.id}
            />
          </li>
        ))}
      </ul>
    </ListShelterContainerStyled>
  );
}
