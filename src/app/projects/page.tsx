import type { Metadata } from "next";
import SectionHeader from "@/components/main/section-header";
import ProjectsList from "./_components/projects-list";
import data from "@/lib/data/sections";

export const metadata: Metadata = {
    title: data.projects.title,
    description: data.projects.desc,
    alternates: {
        canonical: "/projects",
    },
};

function Projects() {
    return (
        <section className="flex flex-col items-center gap-20 py-32 lg:py-40 text-center overflow-x-clip bg-fade-band-right-dark">
            <SectionHeader {...data.projects} />
            <ul className="flex flex-col gap-20">
                <li className="flex flex-col gap-8">
                    <h3 className="self-center p-4 w-4/5 text-accent text-2xl font-medium border-b border-divider">Live Webs</h3>
                    <ProjectsList end={3} />
                </li>
                <li className="flex flex-col gap-8">
                    <h3 className="self-center p-4 w-4/5 text-accent text-2xl font-medium border-b border-divider">Templates</h3>
                    <ProjectsList init={4} />
                </li>
            </ul>
        </section>
    );
}

export default Projects;