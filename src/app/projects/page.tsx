import SectionHeader from "@/components/main/section-header";
import ProjectsList from "./_components/projects-list";
import data from "@/lib/data/sections";

function Projects() {
    return (
        <section className="projects section">
            <SectionHeader {...data.projects} />
            <ul className="projects-main">
                <li className="projects-content">
                    <h3 className="projects__title">Live Webs</h3>
                    <ProjectsList end={3} />
                </li>
                <li className="projects-content">
                    <h3 className="projects__title">Templates</h3>
                    <ProjectsList init={4} />
                </li>
            </ul>
        </section>
    );
}

export default Projects;