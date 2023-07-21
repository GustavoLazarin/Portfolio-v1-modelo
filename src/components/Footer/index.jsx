import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github-icon.png"
import styles from "./style.module.css"

export function Footer() {
    return (
        <footer>
            <div className={`${styles.footer} container`}>
                <div>
                    <h1>Contato</h1>
                    <div className={styles.footerIcons}>
                        <img src={whatsappIcon} alt="whatsapp-icon" />
                        <img src={linkedinIcon} alt="linkedin-icon" />
                        <img src={githubIcon} alt="github-icon" />
                    </div>
                </div>
                <p>Todos os direitos reservados - José da Silva</p>
            </div>
        </footer>
    )
}