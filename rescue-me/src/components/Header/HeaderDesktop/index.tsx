import { ButtonLogout } from "../../ButtonLogout";
import { HeaderContainerDesktopStyled } from "./style";
import { SearchBar } from "../SearchBar";

export function HeaderPageDesktop() {
  const userName = localStorage.getItem("@USERNAME");
  return (
    <HeaderContainerDesktopStyled>
      <nav className="NavigatorDesktop">
        <h1 className="LogoRescueMeDesktop">RescueMe</h1>
        <div className="DesktopHeaderContainer">
          <SearchBar />
          <span>{userName}</span>
          <ButtonLogout />
        </div>
      </nav>
    </HeaderContainerDesktopStyled>
  );
}
