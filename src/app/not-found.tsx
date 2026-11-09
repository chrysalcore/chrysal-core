import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/main/section-header';
import Logo from '@/components/others/logo';

export default function NotFound() {
    return (
        <main className="bg-fade-band-left flex min-h-dvh flex-col items-center justify-center gap-12 px-4 py-16">
            <div className="mb-12">
                <Logo className="h-14 w-14" />
            </div>
            <SectionHeader
                eyebrow="Error 404"
                title="Page Not Found"
                desc="The page you are looking for doesn't exist or was moved. Let's get you back on track."
            />
            <Link href="/" className="button-accent">
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </main>
    );
}
