import { ButtonLogout } from "../../ButtonLogout";
import { HeaderContainerMobileStyled } from "./style";

export function HeaderPageMobile() {
  return (
    <HeaderContainerMobileStyled>
      <nav className="NavigatorMobile">
        <h1 className="LogoRescueMeMobile">RescueMe</h1>
        <ButtonLogout />
      </nav>
    </HeaderContainerMobileStyled>
  );
}
