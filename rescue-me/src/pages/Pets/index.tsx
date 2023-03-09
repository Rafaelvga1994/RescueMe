
import React, { useContext } from "react";
import { ModalDeletePets } from "../../components/ModalPets/ModalDeletePets";
import { ModalEditPets } from "../../components/ModalPets/ModalEditPets";
import { ModalPets } from "../../components/ModalPets";
import { RenderCardPets } from "../../components/RenderCardPets";
import { PetsContex } from "../../context/PetsContext";

export function PetsPage() {
    const { isOpen, isOpenTwo, isOpenThree } = useContext(PetsContex);

<<<<<<< HEAD
  return (
    <div>
      {isOpen && <ModalPets />}
      {isOpenTwo && <ModalEditPets />}
      {isOpenThree && <ModalDeletePets />}
      <RenderCardPets />
    </div>
  );
}
=======

    return (
        <div>
            {isOpen && <ModalPets />}
            {isOpenTwo && <ModalEditPets />}
            {isOpenThree && <ModalDeletePets />}
            <RenderCardPets />
        </div>
    );

}
>>>>>>> d88b0a37bf7b14007336c64cb4c8a1d72e8c1adf
