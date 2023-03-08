import "./style.css"
import { SearchBar } from "../Header/SearchBar"

export function SearchMobile() {
    return (
        <div className="SearchMobileContainer">
            <span>@user</span>
            <SearchBar />
        </div>
    )
}