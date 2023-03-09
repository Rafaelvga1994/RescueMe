import styled from "styled-components";

export const SearchMobileContainerStyled = styled.div`
    margin: 12px 0px;
    min-width: 340px;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

span{
    align-self: flex-start;
    margin: 0;
    padding: 0;
}

@media (min-width:900px) {
    display: none;

}
`

