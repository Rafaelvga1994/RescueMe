import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IDescriptEditPets } from "../../../context/@types";
import { PetsContex } from "../../../context/PetsContext";
import { StyleInformationModal } from "./styles";

interface Isubmit {
  state: string;
  address: string;
  telephone: string;
  img: string;
}

export function ModalIndormationPets({ pet }: any) {
  const { setIsOpenFour, editingPets, setEditingPets, pets } =
    useContext(PetsContex);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      state: editingPets?.state,
      address: editingPets?.address,
      telephone: editingPets?.telephone,
      img: editingPets?.img,
    },
  });

  const submit = (formData: Isubmit) => {
    setEditingPets({ ...editingPets, ...formData });
  };

  return (
    <StyleInformationModal>
      <div>
        <div className="container__headerAddModalPets">
          <h2>Editar Informações do abrigo</h2>
          <h2>AQUI!</h2>
          <button
            onClick={() => {
              setIsOpenFour(false);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="">Endereço</label>
          <input
            type="text"
            placeholder="Digite o endereço..."
            {...register("address")}
          />

          <label htmlFor="">Cidade-UF</label>
          <input
            type="text"
            placeholder="Digite o local..."
            {...register("state")}
          />

          <label htmlFor="">Link da foto do animal</label>
          <input
            type="text"
            placeholder="Insira o link da foto aqui..."
            {...register("telephone")}
          />

          <label htmlFor="">Contato</label>
          <input
            type="text"
            placeholder="Digite o número de telefone do local..."
            {...register("img")}
          />

          <div>
            <button
              className="button__colorGray"
              onClick={() => setIsOpenFour(false)}
            >
              Cancelar
            </button>
            <button
              onClick={() => setEditingPets(pet)}
              className="button__colorOrange"
              type="submit"
            >
              Alterar
            </button>
          </div>
        </form>
      </div>
    </StyleInformationModal>
  );
}
