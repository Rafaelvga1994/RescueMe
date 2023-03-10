import styled from "styled-components";

export const StyledInformationPetsPage = styled.div`
  margin-top: 2rem;

  .container__textInformation {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }

  .container__informationsPet {
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .container__informationsPet > img {
    width: 90%;
    height: 265px;
  }

  .informationLocationPets {
    background-color: rgb(248, 249, 250);
    width: 90%;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    padding: 0.5rem;
    border-radius: 15px;
  }

  .informationLocationPets > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .informationLocationPets > div > h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .informationLocationPets > div > button {
    border: none;
    background-color: var(--color-brand);
    font-size: 1rem;
    width: 20%;
    height: 30px;
    font-weight: 600;
    color: #efefef;
    border-radius: 4px;
  }

  .informationLocationPets > h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (min-width: 591px) {
    .container__informationsPet > img {
      width: 60%;
    }
  }

  @media (min-width: 767px) {
    .container__informationsPet > img {
      width: 50%;
    }
  }

  @media (min-width: 1242px) {
    .container__informationsPet > img {
      width: 25%;
    }

    .informationLocationPets > div > button {
      border: none;
      background-color: var(--color-brand);
      font-size: 1rem;
      width: 10%;
      height: 30px;
      font-weight: 600;
      color: #efefef;
    }
  }
`;
