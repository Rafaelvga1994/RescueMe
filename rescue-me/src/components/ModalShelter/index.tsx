import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AddSheltForm } from "../Form/AddShelter";
import { EditModalStyledDiv } from "./style";

export function AddShelter() {
  const { modalAddManipulation, addShelterModal } = useContext(UserContext);
  return (
    <>
      {addShelterModal ? (
        <EditModalStyledDiv>
          <div className="modalContainer">
            <div className="btn__container">
              <p>Adicionar novo abrigo</p>
              <p onClick={() => modalAddManipulation()}>X</p>
            </div>
            <AddSheltForm />
          </div>
        </EditModalStyledDiv>
      ) : null}
    </>
  );
}
