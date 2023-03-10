import styled from "styled-components";

export const StyledRenderCardPets = styled.section`
  background-color: rgb(248, 249, 250);
  width: 90%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 1rem 2% 3rem;

  div > h2 {
    font-size: 1.5rem;

    font-weight: 600;
  }

  div > div {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
  }

  div > div > button {
    width: 40%;
    height: 30px;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
  }

  .buttonAddPetsToLocal {
    background-color: var(--color-brand);
    height: 35px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    border: none;
  }

  .container__petButtonAndTitle {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 424px) {
    margin: 1rem 3% 3rem;
  }
  @media (min-width: 540px) {
    margin: 1rem 4% 3rem;
  }

  @media (min-width: 1229px) {
    .container__petButtonAndTitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin-top: 1rem;

      gap: 1rem;

      width: 100%;
    }
  }
`;

export const RenderCartPetsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  overflow-x: scroll;

  @media (min-width: 1229px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
