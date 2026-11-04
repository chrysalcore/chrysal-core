import Link from 'next/link';
import data from '@/lib/data/contactInfo';

type ContactInfoItem = (typeof data)[number];

function ContactItem({ icon, name, text, href }: ContactInfoItem) {
    return (
        <li className="grow shrink-0 basis-[min(12rem,100%)] flex gap-2">
            <div className="w-12 h-12 p-3 bg-accent rounded fill-on-accent text-on-accent">{icon}</div>
            <Link href={href} rel="noopener noreferrer" target="_blank">
                <h3 className="text-base font-medium">{name}</h3>
                <p className="text-accent text-sm">{text}</p>
            </Link>
        </li>
    );
}

export default function ContactInfo({ children }: { children: React.ReactNode }) {
    return (
        <div className="grow shrink-0 basis-[min(15rem,100%)] flex flex-col gap-20">
            {children}
            <ul className="flex flex-wrap gap-4">
                {data.map((item) => (
                    <ContactItem {...item} key={item.name} />
                ))}
            </ul>
        </div>
    );
}
