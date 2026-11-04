import SectionHeader from './section-header';
import sections from '@/lib/data/sections';
import { type Section } from '@/lib/data/sections';

const sectionClasses: Record<Section, string> = {
    problems: 'flex flex-col items-stretch gap-20 py-24 px-4 lg:px-[15dvw] overflow-x-clip bg-fade-band-right',
    advantages: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-fade-band-left',
    services: 'flex flex-col items-center gap-20 py-24 overflow-x-clip backdrop-blur-sm bg-fade-band',
    process: 'flex flex-col items-stretch gap-20 py-24 px-4 lg:px-[15dvw] overflow-x-clip bg-fade-band-right',
    projects: 'flex flex-col items-center gap-20 py-24 overflow-x-clip backdrop-blur-sm bg-fade-band',
    faq: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-fade-band-left',
    contact: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-linear-to-b from-page via-page/13 to-page',
};

function Section({ children, type }: { children: React.ReactNode; type: Section }) {
    return (
        <section className={sectionClasses[type]}>
            <SectionHeader {...sections[type]} />
            {children}
        </section>
    )
}

export default Section;