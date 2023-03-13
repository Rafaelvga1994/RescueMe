import React, { useContext } from "react";
import { PetsContex } from "../../context/PetsContext";
import { StyledDialogModalPets } from "./styles";

export function ModalPets() {
  const { setIsOpen } = useContext(PetsContex);

  return (
    <StyledDialogModalPets>
      <div>
        <div className="container__headerAddModalPets">
          <h2>Adicionar animais ao abrigo</h2>

          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
        </div>
        <form action="">
          <label htmlFor="">Nome do animal</label>
          <input type="text" placeholder="Digite o nome dele..." />

          <label htmlFor="">Tipo do animal</label>
          <select id="" title="Selecionar tipo">
            <option value="">Tipo de animal</option>
          </select>

          <label htmlFor="">Link da foto do animal</label>
          <input type="text" placeholder="Insira o link da foto aqui..." />
        </form>
      </div>
    </StyledDialogModalPets>
  );
}
