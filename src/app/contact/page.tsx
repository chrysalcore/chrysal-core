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
        <section className="flex flex-row flex-wrap items-start gap-4 py-32 lg:py-40 px-4 lg:px-[15dvw] bg-fade-band-left">
            <ContactInfo>
                <SectionHeader {...sections.contact} alignStart />
            </ContactInfo>
            <Form />
        </section>
    );
}
