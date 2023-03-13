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

=======
  return (
    <div>
      {isOpen && <ModalPets />}
      {isOpenTwo && <ModalEditPets />}
      {isOpenThree && <ModalDeletePets />}

      <RenderCardPets />
    </div>
  );
>>>>>>> 2985af901708279f29ef87719dad53732f121a46
}
