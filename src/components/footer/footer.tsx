import FooterContent from "./footer-content";
import FooterRights from "./footer-rights";

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-16 py-24 px-4 bg-domain">
            <FooterContent />
            <FooterRights />
        </footer>
    )
}

export default Footer;