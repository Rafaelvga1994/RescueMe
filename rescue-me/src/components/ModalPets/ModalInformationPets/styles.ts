import styled from "styled-components";

export const StyleInformationModal = styled.dialog`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 80%;
  top: 7%;
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
    font-weight: 600;
  }

  form > input {
    height: 35px;
    border-radius: 4px;
  }

  form > select {
    height: 35px;
    border-radius: 4px;
  }

  form > div {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
  }

  form > div > button {
    height: 30px;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
  }

  .button__colorGray {
    background-color: var(--color-gray4);
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
