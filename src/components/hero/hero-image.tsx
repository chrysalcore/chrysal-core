import Image from 'next/image';

function HeroImage() {
    return (
        <picture className="hidden lg:flex justify-center items-center">
            <Image className="w-100" loading="lazy" src="/icons/hero.svg" alt="hero image" width={458} height={457} />
        </picture>
    )
}

export default HeroImage