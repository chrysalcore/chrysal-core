import Logo from '../others/logo';
import Nav from '../nav/nav';
import HeaderCTA from "./header-cta"
import AsideNav from '../nav/aside-nav';

function Header() {
    return (
        <header className="flex justify-between py-2 px-4 md:px-16 w-full bg-band fixed z-100">
            <Logo />
            <Nav />
            <HeaderCTA />
            <AsideNav />
            <div className="absolute top-0 left-0 w-full h-full bg-band z-10"></div>
        </header>
    )
}

export default Header;