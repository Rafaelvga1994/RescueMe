import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 1rem;

  .container__img {
    display: none;
  }

  .container__imgMobile {
    width: 90%;
    margin-top: 1rem;
    border-radius: 5px;
  }

  @media (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 1rem;
    flex-direction: row;
    gap: 2rem;

    .container__img {
      width: 43%;
      display: flex;
    }
    .container__imgMobile {
      display: none;
    }
  }

  @media (min-width: 1244px) {
    margin-top: 2rem;
    .container__img {
      width: 30%;
    }
  }
`;
