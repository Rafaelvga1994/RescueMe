import { useContext } from "react";
import { RxExit } from "react-icons/rx";
import { UserContext } from "../../context/UserContext";
import { ButtonLogoutStyled } from "./style";

export function ButtonLogout() {
  const { userLogout } = useContext(UserContext);
  return (
    <ButtonLogoutStyled onClick={() => userLogout()}>
      <RxExit color="#868E96" />
      <p>Sair da conta</p>
    </ButtonLogoutStyled>
  );
}
