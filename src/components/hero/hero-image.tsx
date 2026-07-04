function HeroImage() {
    return (
        <picture className="hero-picture">
            <img className="hero-picture__img" loading="lazy" src={new URL('../../../assets/icons/hero.svg', import.meta.url).href} alt="hero image" />
        </picture>
    )
}

export default HeroImage