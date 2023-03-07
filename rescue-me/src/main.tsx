import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CreatePetsProviders } from "./context/PetsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CreatePetsProviders>
      <App />
    </CreatePetsProviders>
  </React.StrictMode>
);
