"use client";

import SlidersList from '@/components/slider/sliders-list';
import Problem from './problem';
import data from '@/app/_lib/data/problems';
import { useAutoSlider } from '@/hooks/use-auto-slider';

export default function ProblemsSlider() {
    const current = useAutoSlider(data.length, 15000);
    const item = data[current];

    return (
        <article className="flex flex-col items-start gap-12 w-full max-w-100 overflow-x-visible">
            <Problem key={current} {...item} />
            <SlidersList current={current} size={data.length} />
        </article>
    )
}