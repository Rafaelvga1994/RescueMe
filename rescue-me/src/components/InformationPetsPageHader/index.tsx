import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledInformationPets } from "./styles";

export function InformationPetsPageHader() {
  const navigate = useNavigate();

  return (
    <StyledInformationPets>
      <h2>RescueMe</h2>

      <div>
        <h2>@user</h2>
        <button onClick={() => navigate("/")}>
          <RxExit color="#868E96" size={20} />
        </button>
      </div>
    </StyledInformationPets>
  );
}
