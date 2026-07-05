import Link from 'next/link';
import data from '@/lib/data/contactInfo';

type ContactInfoItem = (typeof data)[number];

function ContactItem({ icon, name, text, href }: ContactInfoItem) {
    return (
        <li className="contact-item">
            <div className="contact-item__img">{icon}</div>
            <Link href={href} rel="noopener noreferrer" target="_blank" className="contact-item__link">
                <h3 className="contact-item__name">{name}</h3>
                <p className="contact-item__ref">{text}</p>
            </Link>
        </li>
    );
}

export default function ContactInfo({ children }: { children: React.ReactNode }) {
    return (
        <div className="contact-info">
            {children}
            <ul className="contact-list">
                {data.map((item) => (
                    <ContactItem {...item} key={item.name} />
                ))}
            </ul>
        </div>
    );
}
