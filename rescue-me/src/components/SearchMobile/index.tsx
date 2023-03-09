import { SearchMobileContainerStyled } from "./style"
import { SearchBar } from "../Header/SearchBar"

export function SearchMobile() {
    return (
        <SearchMobileContainerStyled>
            <span>@user</span>
            <SearchBar />
        </SearchMobileContainerStyled>

    )
}