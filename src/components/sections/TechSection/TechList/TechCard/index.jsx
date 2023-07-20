export function TechCard({ name, img }) {
    return (
        <li>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </li>
    )
}