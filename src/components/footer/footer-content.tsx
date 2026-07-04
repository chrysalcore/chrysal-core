import Nav from "../nav/nav";
import SocialLinks from "../others/social-links";
import Logo from "../others/logo";

function FooterContent() {
    return (
        <section className="footer-content">
            <Nav />
            <SocialLinks />
            <Logo />
        </section>
    )
}

export default FooterContent;