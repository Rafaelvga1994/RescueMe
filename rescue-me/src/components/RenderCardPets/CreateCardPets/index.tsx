import React, { useContext } from "react";
import { IPetsDescript } from "../../../context/@types";
import { PetsContex } from "../../../context/PetsContext";
import { StyledCardPets } from "./styles";

export function CreateCardPets({ renderPets }: any) {
  const { setIsOpenTwo, setIsOpenThree } = useContext(PetsContex);

  return (
    <StyledCardPets>
      <li>
        <img src={renderPets.img} alt="" />
      </li>
      <div className="container__typeAndNameRenderCart">
        <li>{renderPets.name}</li>
        <li>{renderPets.type}</li>
      </div>

      <div>
        <button
          className="container__buttonCreateCardEdit"
          onClick={() => setIsOpenTwo(true)}
        >
          Editar
        </button>
        <button
          className="container__buttonCreateCardDelete"
          onClick={() => setIsOpenThree(true)}
        >
          Deletar
        </button>
      </div>
    </StyledCardPets>
  );
}
