import FooterContent from './footer-content';
import FooterRights from './footer-rights';

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-16 bg-band px-4 py-24">
            <FooterContent />
            <FooterRights />
        </footer>
    );
}

export default Footer;
