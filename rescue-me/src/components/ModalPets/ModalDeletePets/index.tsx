import React, { useContext } from "react";
import { PetsContex } from "../../../context/PetsContext";
import { StyledDialogModalDeletePets } from "./styles";

export function ModalDeletePets() {
  const { setIsOpenThree } = useContext(PetsContex);

  return (
    <StyledDialogModalDeletePets>
      <h2>Tem certeza que deseja excluir esse animal do abrigo?</h2>

      <div>
        <button
          className="button__colorGray"
          onClick={() => {
            setIsOpenThree(false);
          }}
        >
          Cancelar
        </button>

        <button className="button__colorOrange">Excluir</button>
      </div>
    </StyledDialogModalDeletePets>
  );
}
