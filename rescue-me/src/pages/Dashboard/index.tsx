import { CardShelter } from "../../components/CardShelter"
import { FooterPage } from "../../components/Footer"

export function Dashboard() {
    return (
        <div>
            Dashboard
            <CardShelter imageShelter={"https://diaonline.ig.com.br/wp-content/uploads/2020/04/ongs-de-animais-em-goiania.jpg"} shelterName={"Abrigo dos Animais Refugados"} shelterCity={"Goiânia-GO"} />
            <FooterPage/>
        </div>
    )
}