import SectionHeader from '@/components/main/section-header';
import sections from '@/lib/data/sections';
import ContactInfo from './_components/contact-info';
import Form from './_components/form';

export default function ContactPage() {
    return (
        <section className="flex flex-row flex-wrap items-start gap-4 py-24 px-4 lg:px-[15dvw] bg-fade-domain-left">
            <ContactInfo>
                <SectionHeader {...sections.contact} />
            </ContactInfo>
            <Form />
        </section>
    );
}
