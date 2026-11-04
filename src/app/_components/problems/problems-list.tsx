import Image from 'next/image';

import ProblemsSlider from './problems-slider';

export default function ProblemsList() {
    return (
        <div className="flex justify-center items-center lg:justify-between">
            <ProblemsSlider />
            <Image className="hidden lg:block w-[45%] aspect-square" loading="lazy" src="/imgs/problem-illustration.webp" alt="" width={1024} height={1024} sizes="45vw" />
        </div>
    );
}
