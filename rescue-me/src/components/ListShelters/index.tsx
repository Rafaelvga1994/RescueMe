import "./style.css"
import { CardShelter } from "./CardShelter"
import { api } from "../../services"
import { useState } from "react"
import { useContext } from "react"
import { IPetsCard } from "../../context/@types"
import { iShelter } from "../../context/@types"
import { IUser } from "../../context/UserContext"

// interface iShelter{
//     address: string;
//     id: number;
//     img: string;
//     pets: IPetsCard[];
//     state: string;
//     userId: number;
// }

export function ListShelter() {
    const [shelterList, setShelterList] = useState<iShelter[]>()

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MzEzMjQ5LCJleHAiOjE2NzgzMTY4NDksInN1YiI6IjQifQ.HZocaxHHdGjLY41SVt58VSQMzkM32huRUhDqE0571xg"

    async function listShelterAPI(token: string) {
        const response = await api.get('/locations', { headers: { Authorization: `Bearer ${token}` } })
        try {
            console.log(response.data)
            setShelterList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    listShelterAPI(token)

    return (
        <div className="ListShelterContainer">
            <ul className="ListShelter">
                {
                    shelterList?.map(shelter =>
                        <li>
                            <CardShelter imageShelter={shelter.img} shelterName={shelter.name} shelterCity={shelter.state} isAdmin={true}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}