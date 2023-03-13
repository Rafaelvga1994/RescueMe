import styled from "styled-components";

export const DivStyled = styled.div`
  width: 82%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 100px;
  p {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #212529;
  }
  button {
    width: 152px;
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
  }
`;
