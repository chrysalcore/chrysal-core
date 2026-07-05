'use client';

import SlidersList from '@/components/slider/sliders-list';
import Step from './process-step';
import data from '@/app/_lib/data/process';
import { useAutoSlider } from '@/hooks/use-auto-slider';

export default function ProcessSlider() {
    const current = useAutoSlider(data.length, 10000);
    const item = data[current];

    return (
        <article className="flex flex-col items-center gap-12 w-full max-w-100 lg:max-w-80 overflow-x-visible">
            <Step {...item} />
            <SlidersList current={current} size={data.length} />
        </article>
    )
}