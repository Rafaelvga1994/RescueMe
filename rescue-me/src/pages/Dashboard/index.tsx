<<<<<<< HEAD
import { FooterPage } from "../../components/Footer";
import { HeaderPageDesktop } from "../../components/Header/HeaderDesktop";
import { HeaderPageMobile } from "../../components/Header/HeaderMobile";
import { SearchMobile } from "../../components/SearchMobile";
import { ListShelter } from "../../components/ListShelters";
import { AddShelter } from "../../components/ModalShelter";
import { BtnAddShelter } from "../../components/ButtonADDShelter";
import { StyledDiv } from "./style";

export function Dashboard() {
  return (
    <StyledDiv>
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
=======

import { FooterPage } from "../../components/Footer"
import { HeaderPageDesktop } from "../../components/Header/HeaderDesktop"
import { HeaderPageMobile } from "../../components/Header/HeaderMobile"
import { SearchMobile } from "../../components/SearchMobile"
import { ListShelter } from "../../components/ListShelters"
import { AddShelter } from "../../components/AddShelters"

export function Dashboard() {
    return (
        <div>
            <HeaderPageDesktop/>
            <HeaderPageMobile/>
            <SearchMobile/>
            <AddShelter/>
            <ListShelter/>
            <FooterPage/>
        </div>
    )
}
>>>>>>> feat/styledComponents
