import Image from 'next/image';

import ProblemsSlider from './problems-slider';

export default function ProblemsList() {
    return (
        <div className="problems-container">
            <ProblemsSlider />
            <Image className="problems-img" loading="lazy" src="/icons/problem.svg" alt="problem img" width={400} height={400} />
        </div>
    );
}
