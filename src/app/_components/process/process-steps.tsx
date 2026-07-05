import Image from 'next/image';
import ProcessSlider from './process-slider';

export default function ProcessSteps() {
    return (
        <div className="process-container">
            <ProcessSlider />
            <Image className="process-img" loading="lazy" src="/icons/steps.svg" alt="steps image" width={400} height={400} />
        </div>
    );
}
