import styled from "styled-components";

export const EditModalStyledDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  background: rgba(51, 51, 51, 0.5);

  .modalContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 790px;
    height: fit-content;
    padding: 33px 15px;
    background-color: #fcfeff;
  }
  .btn__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 26px;
  }
  .btn__container > p {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #212529;
  }
  button {
    display: block;
    width: 148px;
    height: 38px;
    padding: 7px 20px;
    background: #ff701c;
    border-radius: 4px;
    margin-top: 20px;
    border-style: none;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #fcfeff;
  }
`;
