'use client';

import { RotateCcw } from 'lucide-react';
import SectionHeader from '@/components/main/section-header';
import Logo from '@/components/others/logo';

export default function ErrorPage({
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) {
    return (
        <main className="bg-fade-band-left flex min-h-dvh flex-col items-center justify-center gap-12 px-4 py-16">
            <div className="mb-12">
                <Logo className="h-14 w-14" />
            </div>
            <SectionHeader
                eyebrow="Error"
                title="Something Went Wrong"
                desc="This page couldn't load. Please try again in a moment."
            />
            <button className="button-accent" type="button" onClick={() => unstable_retry()}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Try Again
            </button>
        </main>
    );
}
