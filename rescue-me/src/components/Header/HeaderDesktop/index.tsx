import { ButtonLogout } from "../../ButtonLogout";
import { HeaderContainerDesktopStyled } from "./style";
import { SearchBar } from "../SearchBar";

export function HeaderPageDesktop() {
    return (
        <HeaderContainerDesktopStyled>
            <nav className="NavigatorDesktop">
                <h1 className="LogoRescueMeDesktop">RescueMe</h1>
                <div className="DesktopHeaderContainer">
                    <SearchBar/>
                    <span>@user</span>
                    <ButtonLogout />
                </div>
            </nav>
        </HeaderContainerDesktopStyled>
    )
}