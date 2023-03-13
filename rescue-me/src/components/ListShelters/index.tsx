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

<<<<<<< HEAD
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
=======
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4NDUwMzA5LCJleHAiOjE2Nzg0NTM5MDksInN1YiI6IjQifQ.NB_xTWoKEjE9L06M7sP9rqFP0vEbkEUQvzOyR9H_R88";

    useEffect(() => {
        async function listShelterAPI(token: string) {
            const response = await api.get("/locations", {
                headers: { Authorization: `Bearer ${token}` },
            });
            try {
                console.log(response.data);
                setShelterList(response.data);
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
                        />
                    </li>
                ))}
            </ul>
        </ListShelterContainerStyled>
    );
>>>>>>> feat/styledComponents
}
