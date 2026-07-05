import SectionHeader from '@/components/main/section-header';
import sections from '@/lib/data/sections';
import ContactInfo from './_components/contact-info';
import Form from './_components/form';

export default function ContactPage() {
    return (
        <section className="contact section">
            <ContactInfo>
                <SectionHeader {...sections.contact} />
            </ContactInfo>
            <Form />
        </section>
    );
}
