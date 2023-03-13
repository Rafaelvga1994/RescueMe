import styled from "styled-components";

export const EditModalStyledDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  top: 0;
  background: rgba(51, 51, 51, 0.5);

  .modalContainer {
    position: relative;
    width: 334px;
    height: 170px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    padding: 15px;
    background-color: #fcfeff;
    border-radius: 8px;
  }
  .btn__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 26px;
  }
  .btn__container > p {
    width: 279px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: #212529;
  }
  .btnDelet {
    display: block;
    width: 91px;
    height: 38px;
    padding: 7px 20px;
    background: #ff701c;
    border-radius: 4px;
    border-style: none;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #fcfeff;
  }
  .btnCancel {
    width: 105px;
    height: 38px;
    background: #e9ecef;
    border-radius: 4px;
    border-style: none;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #868e96;
  }
  .deletContainer {
    display: flex;
    flex-direction: row;
    gap: 47px;
    margin-top: 27px;
  }
  span {
    position: absolute;
    top: 25px;
    right: 20px;
  }
`;
