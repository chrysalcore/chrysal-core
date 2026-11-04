import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/main/section-header';

export default function NotFound() {
    return (
        <section className="bg-fade-band-left flex flex-col items-center gap-12 px-4 py-32 lg:py-40">
            <SectionHeader
                eyebrow="Error 404"
                title="Page Not Found"
                desc="The page you are looking for doesn't exist or was moved. Let's get you back on track."
            />
            <Link href="/" className="button-accent">
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </section>
    );
}
