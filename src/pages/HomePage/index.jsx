import { DefaultTemplate } from "../../components/DefaultTemplate";
import { BannerSection } from "../../components/sections/BannerSection";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { TechSection } from "../../components/sections/TechSection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";

export function HomePage() {
    return (
        <DefaultTemplate>
            <BannerSection/>
            <AboutMeSection/>
            <TechSection/>
            <ProjectsSection/>
        </DefaultTemplate>
    )
}