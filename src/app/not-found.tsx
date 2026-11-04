import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/main/section-header';

export default function NotFound() {
    return (
        <section className="flex flex-col items-center gap-12 py-32 lg:py-40 px-4 bg-fade-band-left">
            <SectionHeader eyebrow="Error 404" title="Page Not Found" desc="The page you are looking for doesn't exist or was moved. Let's get you back on track." />
            <Link href="/" className="button-accent">
                Back to Home
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
        </section>
    );
}
