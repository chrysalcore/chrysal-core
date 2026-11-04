import Section from '@/components/main/section';
import ProblemsList from '@/app/_components/problems/problems-list';
import AdvantagesList from '@/app/_components/advantages/advantages-list';
import ServicesList from '@/app/_components/services/services-list';
import ProjectsList from '@/app/projects/_components/projects-list';
import ProcessSteps from '@/app/_components/process/process-steps';
import FAQList from '@/app/_components/faq/faq-list';

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
                <ProjectsList end={4} />
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
