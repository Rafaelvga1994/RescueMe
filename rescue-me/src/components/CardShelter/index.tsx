import { BsTrash3 } from "react-icons/bs"
import "./style.css"

interface iCardShelter{
    imageShelter: string;
    shelterName: string;
    shelterCity: string;
}

export function CardShelter({imageShelter, shelterName, shelterCity}:iCardShelter) {

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
                    <button className="ButtonDeleteCardShelter"><BsTrash3 color="#fff" size={20} /></button>
                </div>
            </section>
        </div>
    )
}