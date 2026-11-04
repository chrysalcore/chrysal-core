'use client';

import { RotateCcw } from 'lucide-react';
import SectionHeader from '@/components/main/section-header';

export default function ErrorPage({
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) {
    return (
        <section className="bg-fade-band-left flex flex-col items-center gap-12 px-4 py-32 lg:py-40">
            <SectionHeader
                eyebrow="Error"
                title="Something Went Wrong"
                desc="This section couldn't load. Try again, and if it keeps failing, reach us from the contact page."
            />
            <button className="button-accent" type="button" onClick={() => unstable_retry()}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Try Again
            </button>
        </section>
    );
}
