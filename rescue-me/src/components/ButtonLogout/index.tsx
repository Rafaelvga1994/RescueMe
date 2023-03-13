import { RxExit } from "react-icons/rx";
import { ButtonLogoutStyled } from "./style";

export function ButtonLogout() {
  return (
    <ButtonLogoutStyled>
      <RxExit color="#868E96" />
      <p>Sair da conta</p>
    </ButtonLogoutStyled>
  );
}
