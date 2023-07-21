import logo from "../../assets/portfolio.png"
import styles from "./style.module.css"

export function Header() {
    return (
        <header>
            <div className={`${styles.header} container`}>
                <img src={logo} alt="logo" />
                <div className={styles.headerGuide}>
                    <a href="#">Stack</a>
                    <a href="#">Projetos</a>
                    <a href="#">Sobre</a>
                </div>
                <button>Contato</button>
            </div>
        </header>
    )
}