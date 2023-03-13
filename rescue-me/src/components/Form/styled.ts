import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  border: 1px solid #e9ecef;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 5%;
    justify-content: space-evenly;
    align-items: center;
  }
  h4 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;

    color: #212529;
  }
  label {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #212529;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;

    width: 80%;
    height: 33px;

    background: #f8f9fa;

    border: 1px solid #e9ecef;
    border-radius: 4px;
  }

  .btnEnterLogin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;

    width: 90%;
    height: 38px;

    background: #ff701c;
    border: 1px solid #ff701c;
    border-radius: 4px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: #fcfeff;
    cursor: pointer;
  }

  .btnEnterLogin:hover {
    opacity: 50%;
  }

  .btnRegisterLogin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;

    width: 90%;
    height: 38px;

    border: 1px solid #e9ecef;
    border-radius: 4px;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: #212529;
    cursor: pointer;
  }

  .btnRegisterLogin:hover {
    opacity: 50%;
  }
`;
