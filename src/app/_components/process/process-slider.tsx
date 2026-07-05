'use client';

import SlidersList from '@/components/slider/sliders-list';
import Step from './process-step';
import data from '@/app/_lib/data/process';
import { useAutoSlider } from '@/hooks/use-auto-slider';

export default function ProcessSlider() {
    const current = useAutoSlider(data.length, 10000);
    const item = data[current];

    return (
        <article className="process-step">
            <Step {...item} />
            <SlidersList current={current} size={data.length} />
        </article>
    )
}