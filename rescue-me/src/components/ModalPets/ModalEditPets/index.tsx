import React, { useContext } from "react";
import { PetsContex } from "../../../context/PetsContext";

export function ModalEditPets() {
  const { setIsOpenTwo } = useContext(PetsContex);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpenTwo(false);
        }}
      >
        Fechar
      </button>
      Botão de editar Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ex alias facere cumque voluptates nostrum ea voluptatum vero debitis
      quidem quod corporis a, dolores labore, quasi voluptatem natus inventore,
      magni eligendi?
    </div>
  );
}
