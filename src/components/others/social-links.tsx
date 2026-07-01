import contactInfo from '@/lib/data/contactInfo'

function SocialLinks() {
    const style = {
        fill: '#ffbf00',
        strokeWidth: 0
    }

    return (
        <ul className="social-links">
            {contactInfo.map((item) => (
                <li key={item.name} className="social-link fill-amber-400 stroke-0">
                    <a href={item.href} aria-label={item.name} target="__blank" referrerPolicy="no-referrer" className="social-link__link">
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks