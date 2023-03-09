
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MzY3OTkxLCJleHAiOjE2NzgzNzE1OTEsInN1YiI6IjQifQ.OL8CqT_EtCixpkdXkacEvQ7ZGxJzmCvNL1TkfgVe6fs";

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

