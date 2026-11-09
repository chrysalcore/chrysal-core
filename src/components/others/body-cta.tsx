import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

export default function BodyCTA() {
    return (
        <div className="fixed right-6 bottom-6 z-50 lg:hidden">
            <Link href="/contact" className="m-0 block rounded-lg bg-accent p-3 shadow-lg/10" aria-label="Contact">
                <CalendarDays className="h-8 w-8 text-on-accent" aria-hidden="true" />
            </Link>
        </div>
    );
}
