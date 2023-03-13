import { BsTrash3 } from "react-icons/bs";
import { CardShelterContainerStyled } from "./style";
import { iCardShelter } from "../../../context/@types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export function CardShelter({
  imageShelter,
  shelterName,
  shelterCity,
  isAdmin,
  id,
}: iCardShelter) {
  const { userDeletShelter } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <CardShelterContainerStyled>
      <div className="ImageShelterContainer">
        <img className="ImageShelter" src={imageShelter} alt="" />
      </div>
      <section className="InfoCardShelter">
        <div className="TextCardShelter">
          <h2 className="ShelterName">{shelterName}</h2>
          <h3 className="ShelterCity">{shelterCity}</h3>
        </div>
        <div className="ButtonsCardShelter">
          <button
            className="ButtonAnimalsShelter"
            onClick={() => navigate("/pets")}
          >
            Animais no abrigo
          </button>
          {isAdmin ? (
            <button
              className="ButtonDeleteCardShelter"
              onClick={() => userDeletShelter(id)}
            >
              <BsTrash3 color="#fff" size={20} />
            </button>
          ) : (
            <br></br>
          )}
        </div>
      </section>
    </CardShelterContainerStyled>
  );
}
