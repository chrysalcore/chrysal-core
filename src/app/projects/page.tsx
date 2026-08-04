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
        <section className="flex flex-col items-center gap-20 py-24 text-center overflow-x-clip bg-fade-domain-right-dark">
            <SectionHeader {...data.projects} />
            <ul className="flex flex-col gap-20">
                <li className="flex flex-col gap-8">
                    <h3 className="self-center p-4 w-4/5 text-primary text-2xl font-bold border-b border-primary">Live Webs</h3>
                    <ProjectsList end={3} />
                </li>
                <li className="flex flex-col gap-8">
                    <h3 className="self-center p-4 w-4/5 text-primary text-2xl font-bold border-b border-primary">Templates</h3>
                    <ProjectsList init={4} />
                </li>
            </ul>
        </section>
    );
}

export default Projects;