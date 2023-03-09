import { AiOutlineSearch } from "react-icons/ai"
import { FormSearchBarStyled } from "./style"

export function SearchBar() {
    return (
        <FormSearchBarStyled>
            <input type="text" placeholder="Procurar um abrigo" />
            <button className="ButtonSearch"><AiOutlineSearch color="#fff" size={20} /></button>
        </FormSearchBarStyled>
    )
}