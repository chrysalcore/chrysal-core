import contactInfo from '@/lib/data/contactInfo';

function SocialLinks() {
    return (
        <ul className="flex shrink-0 grow basis-[min(15rem,100%)] items-center justify-center gap-12 bg-band px-2 py-4">
            {contactInfo.map((item) => (
                <li key={item.name} className="h-6 w-6 fill-accent text-accent">
                    <a href={item.href} aria-label={item.name} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;
