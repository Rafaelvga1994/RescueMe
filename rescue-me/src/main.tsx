import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CreatePetsProviders } from "./context/PetsContext";
import { BrowserRouter } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <CreatePetsProviders>
        <App />
      </CreatePetsProviders>
      </UserProvider>   
    </BrowserRouter>
  </React.StrictMode>
);
