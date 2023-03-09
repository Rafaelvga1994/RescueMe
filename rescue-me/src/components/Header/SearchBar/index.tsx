<<<<<<< HEAD
import {AiOutlineSearch} from "react-icons/ai"
import "./style.css"

export function SearchBar(){
    return(
        <form className="FormSearchBar">
            <input type="text" placeholder="Procurar um abrigo"/>
            <button className="ButtonSearch"><AiOutlineSearch color="#fff" size={20}/></button>
        </form>
=======
import { AiOutlineSearch } from "react-icons/ai"
import { FormSearchBarStyled } from "./style"

export function SearchBar() {
    return (
        <FormSearchBarStyled>
            <input type="text" placeholder="Procurar um abrigo" />
            <button className="ButtonSearch"><AiOutlineSearch color="#fff" size={20} /></button>
        </FormSearchBarStyled>
>>>>>>> d88b0a37bf7b14007336c64cb4c8a1d72e8c1adf
    )
}