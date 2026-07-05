import SectionHeader from './section-header';
import sections from '@/lib/data/sections';
import { type Section } from '@/lib/data/sections';

function Section({ children, type }: { children: React.ReactNode; type: Section }) {
    return (
        <section className="flex flex-col items-center gap-20 py-24 px-4 lg:px-[15dvw] bg-linear-to-b from-[#050505] via-[#05050522] to-[#050505]">
            <SectionHeader {...sections[type]} />
            {children}
        </section>
    )
}

export default Section;