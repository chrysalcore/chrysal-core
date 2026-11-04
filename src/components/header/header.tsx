import Logo from '../others/logo';
import Nav from '../nav/nav';
import HeaderCTA from './header-cta';
import AsideNav from '../nav/aside-nav';

function Header() {
    return (
        <header className="fixed z-100 flex w-full justify-between bg-band px-4 py-2 md:px-16">
            <Logo />
            <Nav />
            <HeaderCTA />
            <AsideNav />
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-band"></div>
        </header>
    );
}

export default Header;
