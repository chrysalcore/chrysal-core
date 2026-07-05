import Logo from '../others/logo';
import Nav from '../nav/nav';
import HeaderCTA from "./header-cta"
import AsideNav from '../nav/aside-nav';

function Header() {
    return (
        <header className="flex justify-between py-2 px-4 md:px-16 w-full bg-domain fixed z-100">
            <Logo />
            <Nav />
            <HeaderCTA />
            <AsideNav />
        </header>
    )
}

export default Header;