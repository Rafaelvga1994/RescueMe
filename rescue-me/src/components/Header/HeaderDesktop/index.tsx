import { ButtonLogout } from "../../ButtonLogout";
import "./style.css"
import { SearchBar } from "../SearchBar";

export function HeaderPageDesktop() {
    return (
        <header className="HeaderContainerDesktop">
            <nav className="NavigatorDesktop">
                <h1 className="LogoRescueMeDesktop">RescueMe</h1>
                <div className="DesktopHeaderContainer">
                    <SearchBar/>
                    <span>@user</span>
                    <ButtonLogout />
                </div>
            </nav>
        </header>
    )
}