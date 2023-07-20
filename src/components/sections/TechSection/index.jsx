import { TechList } from "./TechList";
import { technologies } from "../../../data/technologies.js"
import { TechCard } from "./TechList/TechCard";

const technoList = technologies;


export function TechSection() {
    return (
        <section>
            <h2>Tecnologias</h2>
            <TechList>
                {technoList.map(techno => (
                    <TechCard key={techno.id} name={techno.name} img={techno.img}/>
                ))}
            </TechList>
        </section>
    )
}