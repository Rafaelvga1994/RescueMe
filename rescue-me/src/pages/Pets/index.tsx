import React, { useContext } from "react";
import { ModalDeletePets } from "../../components/ModalPets/ModalDeletePets";
import { ModalEditPets } from "../../components/ModalPets/ModalEditPets";
import { ModalPets } from "../../components/ModalPets";
import { RenderCardPets } from "../../components/RenderCardPets";
import { PetsContex } from "../../context/PetsContext";
import { ModalIndormationPets } from "../../components/ModalPets/ModalInformationPets";

export function PetsPage() {
  const { isOpen, isOpenTwo, isOpenThree, isOpenFour } = useContext(PetsContex);

  return (
    <div>
      {isOpen && <ModalPets />}
      {isOpenTwo && <ModalEditPets />}
      {isOpenThree && <ModalDeletePets />}
      {isOpenFour && <ModalIndormationPets />}
      <RenderCardPets />
    </div>
  );
}
