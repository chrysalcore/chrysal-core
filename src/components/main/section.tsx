import SectionHeader from './section-header';
import sections from '@/lib/data/sections';
import { type Section } from '@/lib/data/sections';

const sectionClasses: Record<Section, string> = {
    problems: 'flex flex-col items-stretch gap-20 py-24 px-4 lg:px-[15dvw] text-center overflow-x-clip bg-fade-domain-right',
    advantages: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] text-center bg-fade-domain-left',
    services: 'flex flex-col items-center gap-20 py-24 text-center overflow-x-clip backdrop-blur-sm bg-fade-domain',
    process: 'flex flex-col items-stretch gap-20 py-24 px-4 lg:px-[15dvw] text-center overflow-x-clip bg-fade-domain-right',
    projects: 'flex flex-col items-center gap-20 py-24 text-center overflow-x-clip backdrop-blur-sm bg-fade-domain',
    faq: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-fade-domain-left',
    contact: 'flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-linear-to-b from-[#050505] via-[#05050522] to-[#050505]',
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