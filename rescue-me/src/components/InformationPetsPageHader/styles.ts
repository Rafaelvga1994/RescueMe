import styled from "styled-components";

export const StyledInformationPets = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 2.5rem 1rem;

  box-shadow: 0 4px 2px -2px grey;

  button {
    background-color: transparent;
    border: none;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;
