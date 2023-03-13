import {RxExit} from "react-icons/rx"
import { ButtonLogoutStyled } from "./style"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export function ButtonLogout() {

    const navigate = useNavigate()
    
    function userLogout(){
        navigate('/')
        toast.success("Logout Realizado com sucesso!")
        localStorage.clear()
    }

    return (
        <ButtonLogoutStyled onClick={()=>userLogout()}>
            <RxExit color="#868E96" />
            <p>Sair da conta</p>
        </ButtonLogoutStyled>
        
    )
}