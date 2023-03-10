import styled from "styled-components";

export const StyledCardPets = styled.div`
  min-width: 90%;
  border: 3px solid var(--color-brand1);

  img {
    width: 100%;
    height: 240px;
  }

  .container__typeAndNameRenderCart {
    padding: 0 1rem;
  }

  .container__buttonCreateCardEdit {
    background-color: var(--color-brand);
    color: #ffffff;
  }

  .container__buttonCreateCardDelete {
    background-color: var(--color-gray4);
    color: #ffffff;
  }

  @media (min-width: 424px) {
    min-width: 80%;
  }

  @media (min-width: 540px) {
    min-width: 70%;
  }

  @media (min-width: 651px) {
    min-width: 50%;
  }
  @media (min-width: 944px) {
    min-width: 35%;
  }
  @media (min-width: 1229px) {
    min-width: 32%;

    width: 3%;
  }
`;
