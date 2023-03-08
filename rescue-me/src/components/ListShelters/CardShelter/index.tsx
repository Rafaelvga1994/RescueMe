import { BsTrash3 } from "react-icons/bs"
import "./style.css"
import { iCardShelter } from "../../../context/@types"


export function CardShelter({imageShelter, shelterName, shelterCity, isAdmin}:iCardShelter) {

    return (
        <div className="CardShelterContainer">
            <div className="ImageShelterContainer">
                <img className="ImageShelter" src={imageShelter} alt="" />
            </div>
            <section className="InfoCardShelter">
                <div className="TextCardShelter">
                    <h2 className="ShelterName">{shelterName}</h2>
                    <h3 className="ShelterCity">{shelterCity}</h3>
                </div>
                <div className="ButtonsCardShelter">
                    <button className="ButtonAnimalsShelter">Animais no abrigo</button>
                    {isAdmin?<button className="ButtonDeleteCardShelter"><BsTrash3 color="#fff" size={20} /></button>:<br></br>}
                </div>
            </section>
        </div>
    )
}