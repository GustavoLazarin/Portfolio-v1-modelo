import githubIcon from "../../../../../assets/git-icon.png"

export function ProjectCard({ name, description }) {
    return (
        <li>
            <div>
                <h3>{name}</h3>
                <img src={githubIcon} alt="github-icon" />
            </div>
            <p>{description}</p>
            <a href="#">Saiba mais</a>
        </li>
    )
}