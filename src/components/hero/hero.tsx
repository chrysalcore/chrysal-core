import Title from './title';
import Slogan from './slogan';
import HeroCTA from './hero-cta';

function Hero() {
    return (
        <section className="flex items-center min-h-dvh p-4 lg:px-[10dvw] bg-fade-hero">
            <section className="flex flex-col justify-center items-start gap-8 max-w-120 h-140">
                <Title />
                <Slogan />
                <HeroCTA />
            </section>
        </section>
    )
}

export default Hero;