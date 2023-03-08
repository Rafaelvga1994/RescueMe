import React, { Fragment, useContext } from "react";
import { IPetsContext, IPetsDescript } from "../../context/@types";
import { PetsContex } from "../../context/PetsContext";
import { CreateCardPets } from "./CreateCardPets";

export function RenderCardPets() {
  const { pets }: any = useContext(PetsContex);
  const { setIsOpen } = useContext(PetsContex);

  return (
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
        <Fragment>
          {pet.pets.map((renderPets: IPetsDescript) => (
            <ul>
              <CreateCardPets key={pets.id} renderPets={renderPets} />
            </ul>
          ))}
        </Fragment>
      ))}
    </section>
  );
}
