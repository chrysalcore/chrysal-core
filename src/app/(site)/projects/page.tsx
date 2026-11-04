import type { Metadata } from 'next';
import SectionHeader from '@/components/main/section-header';
import ProjectsList from './_components/projects-list';
import data from '@/lib/data/sections';

export const metadata: Metadata = {
    title: data.projects.title,
    description: data.projects.desc,
    alternates: {
        canonical: '/projects',
    },
};

function Projects() {
    return (
        <section className="bg-fade-band-right-dark flex flex-col items-center gap-20 overflow-x-clip py-32 text-center lg:py-40">
            <SectionHeader {...data.projects} />
            <ul className="flex flex-col gap-20">
                <li className="flex flex-col gap-8">
                    <h3 className="w-4/5 self-center border-b border-divider p-4 text-2xl font-medium text-accent">
                        Live Webs
                    </h3>
                    <ProjectsList end={3} />
                </li>
                <li className="flex flex-col gap-8">
                    <h3 className="w-4/5 self-center border-b border-divider p-4 text-2xl font-medium text-accent">
                        Templates
                    </h3>
                    <ProjectsList init={4} />
                </li>
            </ul>
        </section>
    );
}

export default Projects;
