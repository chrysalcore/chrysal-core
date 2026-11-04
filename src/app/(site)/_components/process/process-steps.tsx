import Image from 'next/image';
import ProcessSlider from './process-slider';

export default function ProcessSteps() {
    return (
        <div className="flex items-center justify-center lg:justify-between">
            <ProcessSlider />
            <Image
                className="hidden aspect-square w-[45%] lg:block"
                loading="lazy"
                src="/imgs/process-illustration.webp"
                alt=""
                width={1024}
                height={1024}
                sizes="45vw"
            />
        </div>
    );
}
