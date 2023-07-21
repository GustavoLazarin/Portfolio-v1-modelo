import { ProjectsList } from "./ProjectsList";
import { projects } from "../../../data/projects.js"
import { ProjectCard } from "./ProjectsList/ProjectCard";

const projectsList = projects;

export function ProjectsSection() {
    return (
        <section>
            <div className="container">
                <h2 className="title2">Projetos</h2>
                <ProjectsList>
                    {projectsList.map(project => (
                        <ProjectCard key={project.id} name={project.name} description={project.description}/>
                    ))}
                </ProjectsList>
            </div>
        </section>
    )
}