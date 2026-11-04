import type { Metadata } from 'next';
import SectionHeader from '@/components/main/section-header';
import sections from '@/lib/data/sections';
import ContactInfo from './_components/contact-info';
import Form from './_components/form';

export const metadata: Metadata = {
    title: sections.contact.title,
    description: sections.contact.desc,
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <section className="bg-fade-band-left flex flex-row flex-wrap items-start gap-4 px-4 py-32 lg:px-[15dvw] lg:py-40">
            <ContactInfo>
                <SectionHeader {...sections.contact} alignStart />
            </ContactInfo>
            <Form />
        </section>
    );
}
