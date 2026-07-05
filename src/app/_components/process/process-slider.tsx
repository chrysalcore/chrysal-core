'use client';

import { useEffect, useRef, useState } from 'react';
import SlidersList from '@/components/slider/sliders-list';
import Step from './process-step';
import data from '@/app/_lib/data/process';

export default function ProcessSlider() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number>(null);

    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => {
            setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 10000);

        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, [current]);

    const item = data[current];

    return (
        <article className="process-step">
            <Step {...item} />
            <SlidersList current={current} size={data.length} />
        </article>
    )
}