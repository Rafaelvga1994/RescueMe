
import { FooterPage } from "../../components/Footer"
import { HeaderPageDesktop } from "../../components/Header/HeaderDesktop"
import { HeaderPageMobile } from "../../components/Header/HeaderMobile"
import { SearchMobile } from "../../components/SearchMobile"
import { ListShelter } from "../../components/ListShelters"

export function Dashboard() {
    return (
        <div>
            <HeaderPageDesktop/>
            <HeaderPageMobile/>
            <SearchMobile/>
            Dashboard
            <ListShelter/>
            <FooterPage/>
        </div>
    )
}