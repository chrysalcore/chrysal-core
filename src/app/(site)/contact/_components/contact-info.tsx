import Link from 'next/link';
import data from '@/lib/data/contactInfo';

type ContactInfoItem = (typeof data)[number];

function ContactItem({ icon, name, text, href }: ContactInfoItem) {
    return (
        <li className="flex shrink-0 grow basis-[min(12rem,100%)] gap-2">
            <div className="h-12 w-12 rounded bg-accent fill-on-accent p-3 text-on-accent">{icon}</div>
            <Link href={href} rel="noopener noreferrer" target="_blank">
                <h3 className="text-base font-medium">{name}</h3>
                <p className="text-sm text-accent">{text}</p>
            </Link>
        </li>
    );
}

export default function ContactInfo({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex shrink-0 grow basis-[min(15rem,100%)] flex-col gap-20">
            {children}
            <ul className="flex flex-wrap gap-4">
                {data.map((item) => (
                    <ContactItem {...item} key={item.name} />
                ))}
            </ul>
        </div>
    );
}
