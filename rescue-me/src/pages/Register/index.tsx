import { RegisterForm } from "../../components/Form/RegisterForm";
import imgLoginMobile from "../../../src/assets/ImgLoginMobile.png";
import { StyledContainerRegisterPage } from "../../components/Form/RegisterForm/styled";
import imgRegister from "../../../src/assets/ImgLogin.png";

export function RegisterPage() {
  return (
    <StyledContainerRegisterPage>
      <img className="imgMobileRegister" src={imgLoginMobile} alt="LoginImg" />
      <RegisterForm />
      <img className="imgRegister" src={imgRegister} />
    </StyledContainerRegisterPage>
  );
}
