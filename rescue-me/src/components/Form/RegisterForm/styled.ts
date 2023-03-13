import styled from "styled-components";

export const StyledContainerRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .imgRegister {
    display: none;
  }

  .imgMobileRegister {
    display: flex;
    width: 100%;
  }

  @media (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;
    gap: 1rem;

    .imgMobileRegister {
      display: none;
    }
    .imgRegister {
      display: flex;
    }
  }
`;
