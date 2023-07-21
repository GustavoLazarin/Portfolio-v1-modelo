import githubIcon from "../../../../../assets/git-icon.png"
import styles from "./style.module.css"

export function ProjectCard({ name, description }) {
    return (
        <li className={styles.card}>
            <div className={styles.cardHeader}>
                <h3>{name}</h3>
                <img src={githubIcon} alt="github-icon" />
            </div>
            <p>{description}</p>
            <a href="#">Saiba mais</a>
        </li>
    )
}