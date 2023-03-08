import React, { useContext } from "react";
import { IPetsDescript } from "../../../context/@types";
import { PetsContex } from "../../../context/PetsContext";

export function CreateCardPets({ renderPets }: any) {
  const { setIsOpenTwo, setIsOpenThree }: any = useContext(PetsContex);

  return (
    <>
      <img src={renderPets.img} alt=''/>
      <li>{renderPets.name}</li>
      <li>{renderPets.type}</li>
      <div>
        <button onClick={() => setIsOpenTwo(true)}>Editar</button>
        <button onClick={() => setIsOpenThree(true)}>Deletar</button>
      </div>
    </>
  );
}
