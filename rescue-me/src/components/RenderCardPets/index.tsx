import React, { useContext } from "react";
import { IPetsContext, IPetsDescript } from "../../context/@types";
import { PetsContex } from "../../context/PetsContext";
import { FooterPage } from "../Footer";
import { InformationPets } from "../InformationPets";
import { InformationPetsPageHader } from "../InformationPetsPageHader";
import { CreateCardPets } from "./CreateCardPets";
import { RenderCartPetsContainer, StyledRenderCardPets } from "./styles";

export function RenderCardPets() {
  const { pets }: any = useContext(PetsContex);
  const { setIsOpen } = useContext(PetsContex);

  return (
    <div>
      <InformationPetsPageHader />
      <InformationPets />
      <StyledRenderCardPets>
        <div className="container__petButtonAndTitle">
          <h2>Animais para Adoção</h2>

          <button
            className="buttonAddPetsToLocal"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Adicionar animais ao abrigo
          </button>
        </div>
        {pets.map((pet: IPetsContext) => (
          <RenderCartPetsContainer>
            {pet.pets.map((renderPets: IPetsDescript) => (
              <CreateCardPets key={pets.id} renderPets={renderPets} />
            ))}
          </RenderCartPetsContainer>
        ))}
      </StyledRenderCardPets>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
