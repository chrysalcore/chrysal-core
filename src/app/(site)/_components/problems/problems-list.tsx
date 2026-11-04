import Image from 'next/image';

import ProblemsSlider from './problems-slider';

export default function ProblemsList() {
    return (
        <div className="flex items-center justify-center lg:justify-between">
            <ProblemsSlider />
            <Image
                className="hidden aspect-square w-[45%] lg:block"
                loading="lazy"
                src="/imgs/problem-illustration.webp"
                alt=""
                width={1024}
                height={1024}
                sizes="45vw"
            />
        </div>
    );
}
