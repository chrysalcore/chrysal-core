import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Banner from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import BodyCTA from '@/components/others/body-cta';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <BodyCTA />
            <main className="main">
                <Hero />
                <Banner />
                {children}
            </main>
            <Footer />
        </>
    );
}
