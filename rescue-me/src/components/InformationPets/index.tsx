import { useContext } from "react";
import { PetsContex } from "../../context/PetsContext";
import { StyledInformationPetsPage } from "./styles";

export const InformationPets = () => {
  const { setIsOpenFour, pets } = useContext(PetsContex);
  return (
    <StyledInformationPetsPage>
      {pets.map((pet) => (
        <div>
          <h2 className="container__textInformation">Informações</h2>

          <section className="container__informationsPet">
            <img src={pet.img} alt="" />
            <section className="informationLocationPets">
              <div>
                <h2>{pet.name}</h2>
                <button
                  onClick={() => {
                    setIsOpenFour(true);
                  }}
                >
                  Editar
                </button>
              </div>
              <h3>Endereço</h3>
              <p>{pet.address}</p>

              <h2>Contato</h2>
              <p>{pet.telephone}</p>
            </section>
          </section>
        </div>
      ))}
    </StyledInformationPetsPage>
  );
};
