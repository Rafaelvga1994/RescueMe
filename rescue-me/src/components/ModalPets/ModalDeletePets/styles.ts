import styled from "styled-components";

export const StyledDialogModalDeletePets = styled.dialog`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 25%;
  top: 120%;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  div > button {
    width: 40%;
    height: 30px;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
  }

  .button__colorGray {
    background-color: var(--color-gray5);
    color: #ffffff;
  }

  .button__colorOrange {
    background-color: var(--color-brand);
    color: #ffffff;
  }

  @media (min-width: 767px) {
    width: 40%;
  }
  @media (min-width: 1023px) {
    width: 30%;
  }

  @media (min-width: 1439px) {
    width: 30%;
  }
`;
