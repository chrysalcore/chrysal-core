import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function HeroCTA() {
    return (
        <div className="flex items-center">
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded border border-accent bg-transparent px-8 py-2 text-sm font-semibold tracking-widest text-accent uppercase"
            >
                View Examples
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </div>
    );
}

export default HeroCTA;
