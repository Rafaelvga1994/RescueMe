import React, { useContext } from "react";
import { IPetsContext, IPetsDescript } from "../../context/@types";
import { PetsContex } from "../../context/PetsContext";
import { InformationPets } from "../InformationPets";
import { InformationPetsPageHader } from "../InformationPetsPageHader";
import { CreateCardPets } from "./CreateCardPets";

export function RenderCardPets() {
  const { pets }: any = useContext(PetsContex);
  const { setIsOpen } = useContext(PetsContex);

  return (
    <div>
      <InformationPetsPageHader />
      <InformationPets />
      <section>
        <div>
          <h2>Animais para Adoção</h2>
        </div>
        <div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Adicionar animais ao abrigo
          </button>
        </div>
        {pets.map((pet: IPetsContext) => (
          <ul>
            {pet.pets.map((renderPets: IPetsDescript) => (
              <CreateCardPets key={pets.id} renderPets={renderPets} />
            ))}
          </ul>
        ))}
      </section>
    </div>
  );
}
