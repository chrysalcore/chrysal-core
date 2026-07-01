import Logo from '../others/logo';
import Nav from '../nav/nav';
import HeaderCTA from "./header-cta"
import AsideNav from '../nav/aside-nav';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
            <HeaderCTA />
            <AsideNav />
            <div className='w-full h-full bg-[color-mix(in_srgb,#c39870_70%,#fff)] absolute left-0 top-0 z-10'></div>
        </header>
    )
}

export default Header;