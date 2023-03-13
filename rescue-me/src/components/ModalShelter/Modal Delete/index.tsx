import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { EditModalStyledDiv } from "./style";

export function DeletShelter() {
  const { deletShelterModal, modalDeletManipulation, userDeletShelter } =
    useContext(UserContext);
  const shelterID = parseInt(localStorage.getItem("@SHELTERID")!);
  return (
    <>
      {deletShelterModal ? (
        <EditModalStyledDiv>
          <div className="modalContainer">
            <div className="btn__container">
              <p>Tem certeza que quer excluir esse abrigo?</p>
              <span onClick={() => modalDeletManipulation(shelterID)}>X</span>
            </div>
            <div className="deletContainer">
              <button
                className="btnCancel"
                onClick={() => modalDeletManipulation(shelterID)}
              >
                Cancelar
              </button>
              <button
                className="btnDelet"
                onClick={() => userDeletShelter(shelterID)}
              >
                Excluir
              </button>
            </div>
          </div>
        </EditModalStyledDiv>
      ) : null}
    </>
  );
}
