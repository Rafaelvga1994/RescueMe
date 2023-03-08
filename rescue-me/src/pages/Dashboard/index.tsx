import { CardShelter } from "../../components/CardShelter"
import { FooterPage } from "../../components/Footer"
import { HeaderPageDesktop } from "../../components/Header/HeaderDesktop"
import { HeaderPageMobile } from "../../components/Header/HeaderMobile"
import { SearchMobile } from "../../components/SearchMobile"

export function Dashboard() {
    return (
        <div>
            <HeaderPageDesktop/>
            <HeaderPageMobile/>
            <SearchMobile/>
            Dashboard
            <CardShelter imageShelter={"https://diaonline.ig.com.br/wp-content/uploads/2020/04/ongs-de-animais-em-goiania.jpg"} shelterName={"Abrigo dos Animais Refugados"} shelterCity={"Goiânia-GO"} />
            <FooterPage/>
        </div>
    )
}