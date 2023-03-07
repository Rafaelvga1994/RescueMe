import React, { useContext } from "react";
import { PetsContex } from "../../context/PetsContext";

export function ModalPets() {
  const { setIsOpen } = useContext(PetsContex);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Fechar
      </button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias facere
      cumque voluptates nostrum ea voluptatum vero debitis quidem quod corporis
      a, dolores labore, quasi voluptatem natus inventore, magni eligendi?
    </div>
  );
}
