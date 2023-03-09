import { useContext } from "react";
import { RenderCardPets } from "./components/RenderCardPets";
import { PetsContex } from "./context/PetsContext";
import Router from "./routes";

function App() {
  const { isOpen, isOpenTwo, isOpenThree } = useContext(PetsContex);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
