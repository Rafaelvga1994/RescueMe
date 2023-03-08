import { ButtonLogout } from "../../ButtonLogout";
import "./style.css"

export function HeaderPageMobile() {
    return (
        <header className="HeaderContainerMobile">
            <nav className="NavigatorMobile">
                <h1 className="LogoRescueMeMobile">RescueMe</h1>
                <ButtonLogout />
            </nav>
        </header>
    )
}