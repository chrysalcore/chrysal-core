import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

function HeaderCTA() {
    return (
        <div className="z-20 hidden items-center md:flex">
            <Link href="/contact" className="button-accent">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contact
            </Link>
        </div>
    );
}

export default HeaderCTA;
