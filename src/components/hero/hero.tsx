import Title from './title';
import Slogan from './slogan';
import HeroCTA from './hero-cta';

function Hero() {
    return (
        <section className="hero">
            <section className="hero-content">
                <Title />
                <Slogan />
                <HeroCTA />
            </section>
        </section>
    )
}

export default Hero;