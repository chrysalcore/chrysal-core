import Title from './title';
import Slogan from './slogan';
import HeroCTA from './hero-cta';

function Hero() {
    return (
        <section className="flex justify-center items-center min-h-dvh p-4 text-center lg:justify-between lg:px-[10dvw] lg:py-4 lg:text-left bg-fade-hero">
            <section className="flex flex-col justify-center items-center lg:items-start gap-12 max-w-120 h-140">
                <Title />
                <Slogan />
                <HeroCTA />
            </section>
        </section>
    )
}

export default Hero;