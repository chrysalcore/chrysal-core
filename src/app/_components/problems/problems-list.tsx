import Image from 'next/image';

import ProblemsSlider from './problems-slider';

export default function ProblemsList() {
    return (
        <div className="flex justify-center items-center lg:justify-between">
            <ProblemsSlider />
            <Image className="hidden lg:block w-[45%] aspect-square" loading="lazy" src="/icons/problem.svg" alt="problem img" width={400} height={400} />
        </div>
    );
}
