import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;
  margin-top: 15%;

  .first--paragraph {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    color: #212529;
  }

  .second--paragraph {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    text-align: center;

    color: #495057;
    width: 80%;
  }
`;
