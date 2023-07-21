import styles from "./style.module.css"

export function TechCard({ name, img }) {
    return (
        <li className={styles.card}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </li>
    )
}