import { ButtonLogout } from "../../ButtonLogout";
<<<<<<< HEAD
import "./style.css"

export function HeaderPageMobile() {
    return (
        <header className="HeaderContainerMobile">
=======
import { HeaderContainerMobileStyled } from "./style";

export function HeaderPageMobile() {
    return (
        <HeaderContainerMobileStyled>
>>>>>>> d88b0a37bf7b14007336c64cb4c8a1d72e8c1adf
            <nav className="NavigatorMobile">
                <h1 className="LogoRescueMeMobile">RescueMe</h1>
                <ButtonLogout />
            </nav>
<<<<<<< HEAD
        </header>
=======
        </HeaderContainerMobileStyled>
>>>>>>> d88b0a37bf7b14007336c64cb4c8a1d72e8c1adf
    )
}