import styled from "styled-components";

export const ListShelterContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    overflow-x: scroll;


.ListShelter{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    list-style: none;
    padding: 0;
    overflow-x: scroll;
}

@media (min-width:900px) {
    .ListShelterContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .ListShelter{
        flex-wrap: wrap;
        width: 100%;
        overflow-x: hidden;
        justify-content: center;
        align-items: center;
        max-width: 1300px;
    }
}
`

