import NavLink from '../nav/nav-link';
import navigation from '@/lib/data/navigation';
import SocialLinks from '../others/social-links';
import Logo from '../others/logo';

function FooterContent() {
    return (
        <section className="flex flex-wrap justify-center gap-x-8 gap-y-16">
            <nav className="shrink-0 grow basis-[min(12rem,100%)] py-4">
                <ul className="flex justify-center gap-8">
                    {navigation.map((item) => (
                        <NavLink key={item.text} {...item} />
                    ))}
                </ul>
            </nav>
            <SocialLinks />
            <div className="flex shrink-0 grow basis-[min(12rem,100%)] justify-center">
                <Logo className="h-14 w-14" />
            </div>
        </section>
    );
}

export default FooterContent;
