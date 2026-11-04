import Image from 'next/image';
import ProcessSlider from './process-slider';

export default function ProcessSteps() {
    return (
        <div className="flex justify-center items-center lg:justify-between">
            <ProcessSlider />
            <Image className="hidden lg:block w-[45%] aspect-square" loading="lazy" src="/imgs/process-illustration.webp" alt="" width={1024} height={1024} sizes="45vw" />
        </div>
    );
}
