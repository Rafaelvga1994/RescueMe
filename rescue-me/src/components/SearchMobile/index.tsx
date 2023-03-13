import { SearchMobileContainerStyled } from "./style";
import { SearchBar } from "../Header/SearchBar";

export function SearchMobile() {
  const userName = localStorage.getItem("@USERNAME");
  return (
    <SearchMobileContainerStyled>
      <span>{userName}</span>
      <SearchBar />
    </SearchMobileContainerStyled>
  );
}
