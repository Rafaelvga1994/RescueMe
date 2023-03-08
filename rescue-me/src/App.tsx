import { useContext } from "react";
import { ModalDeletePets } from "./components/ModalDeletePets";
import { ModalEditPets } from "./components/ModalEditPets";
import { ModalPets } from "./components/ModalPets";
import { RenderCardPets } from "./components/RenderCardPets";
import { PetsContex } from "./context/PetsContext";

function App() {
  const { isOpen, isOpenTwo, isOpenThree } = useContext(PetsContex);

  return (
    <div className="App">
      {isOpen && <ModalPets />}
      {isOpenTwo && <ModalEditPets />}
      {isOpenThree && <ModalDeletePets />}
      <RenderCardPets />
    </div>
  );
}

export default App;
