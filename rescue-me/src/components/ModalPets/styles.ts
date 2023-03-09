import styled from "styled-components";

export const StyledDialogModalPets = styled.dialog`
  position: absolute;
  width: 80%;
  height: 45%;
  top: 25%;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;

  .container__headerAddModalPets {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .container__headerAddModalPets > h2 {
    font-size: 1rem;

    font-weight: 600;
  }

  .container__headerAddModalPets > button {
    border: none;
    font-size: 1rem;
    background-color: transparent;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  form > label {
    margin-top: 1rem;
  }
`;
