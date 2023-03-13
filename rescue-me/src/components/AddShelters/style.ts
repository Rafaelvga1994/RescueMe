import styled from "styled-components";

export const AddShelterStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    justify-content: space-evenly;
    align-items: center;
    

    h1{
        font-family: sans-serif;
        font-size: 20px;
        font-weight: 500;
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`