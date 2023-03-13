import React, { useContext } from "react";
import { PetsContex } from "../../../context/PetsContext";
import { StyledDialogModalEditPets } from "./styles";

export function ModalEditPets() {
  const { setIsOpenTwo } = useContext(PetsContex);

  return (
    <StyledDialogModalEditPets>
      <div>
        <div className="container__headerAddModalPets">
          <h2>Editar informações do animal</h2>

          <button
            onClick={() => {
              setIsOpenTwo(false);
            }}
          >
            X
          </button>
        </div>
        <form action="">
          <label htmlFor="">Nome do animal</label>
          <input type="text" placeholder="Digite o nome dele..." />

          <label htmlFor="">Tipo do animal</label>
          <select id="">
            <option value="">Tipo de animal</option>
          </select>

          <label htmlFor="">Link da foto do animal</label>
          <input type="text" placeholder="Insira o link da foto aqui..." />

          <div>
            <button
              className="button__colorGray"
              onClick={() => setIsOpenTwo(false)}
            >
              Cancelar
            </button>
            <button className="button__colorOrange" type="submit">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </StyledDialogModalEditPets>
  );
}
