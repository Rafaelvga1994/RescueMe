import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { DivStyled } from "./style";

export function BtnAddShelter() {
  const { modalAddManipulation } = useContext(UserContext);
  return (
    <DivStyled>
      <p>Radar de Abrigos</p>
      <button onClick={() => modalAddManipulation()}>Adicionar abrigo</button>
    </DivStyled>
  );
}
