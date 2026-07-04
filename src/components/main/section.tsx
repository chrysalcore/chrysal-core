import SectionHeader from './section-header';
import sections from '@/lib/data/sections';
import { type Section } from '@/lib/data/sections';

function Section({ children, type }: { children: React.ReactNode; type: Section }) {
    return (
        <section className={`${type} section`} >
            <SectionHeader {...sections[type]} />
            {children}
        </section>
    )
}

export default Section;