import styled from "styled-components";

export const StyledForm = styled.form`
  width: 80%;
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 5px;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .btnEnterLogin {
    margin-top: 1rem;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-brand);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
  }

  .first--paragraph {
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .second--paragraph {
    text-align: center;
    margin-top: 1rem;
  }

  .btnRegisterLogin {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 499px) {
    width: 84%;
  }
  @media (min-width: 834px) {
    width: 86%;
    .btnEnterLogin {
      height: 45px;
    }

    .btnRegisterLogin {
      height: 45px;
    }
  }

  @media (min-width: 1023px) {
    width: 40%;
  }

  @media (min-width: 1244px) {
    width: 25%;
  }
`;

export const StyleRegisterForm = styled.form`
  border: 1px solid gray;
  padding: 1rem;
  width: 80%;
  margin-top: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .submitSignup {
    height: 35px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--color-brand);
    color: white;
    border: none;
  }

  .backToLoginButton {
    height: 35px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
  }

  @media (min-width: 767px) {
    .submitSignup {
      height: 45px;
    }

    .backToLoginButton {
      height: 45px;
    }
  }

  @media (min-width: 1023px) {
    width: 40%;
  }

  @media (min-width: 1439px) {
    width: 25%;
  }
`;
