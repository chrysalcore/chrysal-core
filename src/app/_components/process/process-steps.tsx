import Image from 'next/image';
import ProcessSlider from './process-slider';

export default function ProcessSteps() {
    return (
        <div className="flex justify-center items-center lg:justify-between">
            <ProcessSlider />
            <Image className="hidden lg:block w-[45%] aspect-square" loading="lazy" src="/icons/steps.svg" alt="steps image" width={400} height={400} />
        </div>
    );
}
