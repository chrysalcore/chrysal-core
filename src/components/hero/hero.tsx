import Title from './title';
import Slogan from './slogan';
import HeroCTA from './hero-cta';

function Hero() {
    return (
        <section className="bg-fade-hero flex min-h-dvh items-center p-4 lg:px-[10dvw]">
            <section className="flex h-140 max-w-3xl flex-col items-start justify-center gap-8">
                <Title />
                <Slogan />
                <HeroCTA />
            </section>
        </section>
    );
}

export default Hero;
