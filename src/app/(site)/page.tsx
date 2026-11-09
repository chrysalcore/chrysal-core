import Section from '@/components/main/section';
import ProblemsList from '@/app/(site)/_components/problems/problems-list';
import AdvantagesList from '@/app/(site)/_components/advantages/advantages-list';
import ServicesList from '@/app/(site)/_components/services/services-list';
import ProjectsList from '@/app/(site)/projects/_components/projects-list';
import ProcessSteps from '@/app/(site)/_components/process/process-steps';
import FAQList from '@/app/(site)/_components/faq/faq-list';

export default function Home() {
    return (
        <>
            <Section type="problems">
                <ProblemsList />
            </Section>
            <Section type="advantages">
                <AdvantagesList />
            </Section>
            <Section type="services">
                <ServicesList />
            </Section>
            <Section type="projects">
                <ProjectsList kinds={['live', 'index']} />
            </Section>
            <Section type="process">
                <ProcessSteps />
            </Section>
            <Section type="faq">
                <FAQList />
            </Section>
        </>
    );
}
