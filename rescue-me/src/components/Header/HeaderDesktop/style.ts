import styled from "styled-components";

export const HeaderContainerDesktopStyled = styled.header`
display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0px;
    width: 100%;


.NavigatorDesktop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
}

.DesktopHeaderContainer{
    min-width: 600px;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.LogoRescueMeDesktop{
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    max-width: 200px;
    margin: 0;
}


@media (max-width:900px) {
    .HeaderContainerDesktop{
        display: none;
    }
}
`


    