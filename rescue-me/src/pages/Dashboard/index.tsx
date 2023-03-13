import { FooterPage } from "../../components/Footer";
import { HeaderPageDesktop } from "../../components/Header/HeaderDesktop";
import { HeaderPageMobile } from "../../components/Header/HeaderMobile";
import { SearchMobile } from "../../components/SearchMobile";
import { ListShelter } from "../../components/ListShelters";
import { AddShelter } from "../../components/ModalShelter";
import { BtnAddShelter } from "../../components/ButtonADDShelter";
import { StyledDiv } from "./style";
import { DeletShelter } from "../../components/ModalShelter/Modal Delete";

export function Dashboard() {
  return (
    <StyledDiv>
      <DeletShelter />
      <AddShelter />
      <HeaderPageDesktop />
      <HeaderPageMobile />
      <SearchMobile />
      <BtnAddShelter />
      <ListShelter />
      <FooterPage />
    </StyledDiv>
  );
}
