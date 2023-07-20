import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github-icon.png"

export function Footer() {
    return (
        <footer>
            <div>
                <h1>Contato</h1>
                <img src={whatsappIcon} alt="whatsapp-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
                <img src={githubIcon} alt="github-icon" />
            </div>
            <p>Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}