import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "../../../context/UserContext";
import { FormSearchBarStyled } from "./style";

export function SearchBar() {
  const { searchShelter } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  return (
    <FormSearchBarStyled onSubmit={handleSubmit(searchShelter)}>
      <input
        type="text"
        placeholder="Procurar um abrigo"
        {...register("search")}
      />
      <button type="submit" className="ButtonSearch">
        <AiOutlineSearch color="#fff" size={20} />
      </button>
    </FormSearchBarStyled>
  );
}
