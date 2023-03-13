import styled from "styled-components";

export const HeaderContainerMobileStyled = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0px;
    width: 100%;


.NavigatorMobile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
}

.LogoRescueMeMobile{
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    max-width: 200px;
    margin: 0;
}


@media (min-width:900px) {
    display: none;
}
`

