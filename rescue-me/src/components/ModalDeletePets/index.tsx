import React, { useContext } from "react";
import { PetsContex } from "../../context/PetsContext";

export function ModalDeletePets() {
  const { setIsOpenThree } = useContext(PetsContex);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpenThree(false);
        }}
      >
        Fechar
      </button>
      Botão de DELETAR Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ex alias facere cumque voluptates nostrum ea voluptatum vero debitis
      quidem quod corporis a, dolores labore, quasi voluptatem natus inventore,
      magni eligendi?
    </div>
  );
}
