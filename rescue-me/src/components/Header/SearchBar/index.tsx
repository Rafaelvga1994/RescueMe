import {AiOutlineSearch} from "react-icons/ai"
import "./style.css"

export function SearchBar(){
    return(
        <form className="FormSearchBar">
            <input type="text" placeholder="Procurar um abrigo"/>
            <button className="ButtonSearch"><AiOutlineSearch color="#fff" size={20}/></button>
        </form>
    )
}