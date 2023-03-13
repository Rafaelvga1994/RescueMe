import styled from "styled-components";

export const FildSetStyled = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 20px;
  label {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #212529;
  }
  input {
    height: 30px;
    padding: 10px 17px;
    background: #f8f9fa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #212529;
  }
`;
