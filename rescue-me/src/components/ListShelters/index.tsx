import { ListShelterContainerStyled } from "./style";
import { CardShelter } from "./CardShelter";
import { api } from "../../services";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { IPetsCard } from "../../context/@types";
import { iShelter } from "../../context/@types";
import { IUser } from "../../context/UserContext";

export function ListShelter() {
  const [shelterList, setShelterList] = useState<iShelter[]>();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hhcmQwN0BnbWFpbC5jb20iLCJpYXQiOjE2NzgzMjQzNjUsImV4cCI6MTY3ODMyNzk2NSwic3ViIjoiNCJ9.czXjw-WvxrGy1UQITNPmfRlCi3EJJiuUA-Pnvt9n1B8";

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
}
