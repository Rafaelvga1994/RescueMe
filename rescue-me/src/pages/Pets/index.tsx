
import React, { useContext } from "react";
import { ModalDeletePets } from "../../components/ModalPets/ModalDeletePets";
import { ModalEditPets } from "../../components/ModalPets/ModalEditPets";
import { ModalPets } from "../../components/ModalPets";
import { RenderCardPets } from "../../components/RenderCardPets";
import { PetsContex } from "../../context/PetsContext";

export function PetsPage() {
    const { isOpen, isOpenTwo, isOpenThree } = useContext(PetsContex);

    return (
        <div>
            {/* Pets Page */}
            {isOpen && <ModalPets />}
            {isOpenTwo && <ModalEditPets />}
            {isOpenThree && <ModalDeletePets />}
            <RenderCardPets />
        </div>
    );
}

