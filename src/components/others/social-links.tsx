import contactInfo from '@/lib/data/contactInfo'

function SocialLinks() {
    return (
        <ul className="grow shrink-0 basis-[min(15rem,100%)] flex justify-center items-center gap-12 py-4 px-2 bg-band">
            {contactInfo.map((item) => (
                <li key={item.name} className="w-6 h-6 fill-accent text-accent">
                    <a href={item.href} aria-label={item.name} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks