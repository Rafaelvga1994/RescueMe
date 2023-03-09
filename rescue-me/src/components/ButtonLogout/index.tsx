import {RxExit} from "react-icons/rx"
import "./style.css"

export function ButtonLogout() {
    return (
        <button className="ButtonLogout">
            <RxExit color="#868E96" />
            <p>Sair da conta</p>
        </button>
    )
}