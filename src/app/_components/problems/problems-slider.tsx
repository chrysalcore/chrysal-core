"use client";

import { useEffect, useRef, useState } from 'react';
import SlidersList from '@/components/slider/sliders-list';
import Problem from './problem';
import data from '@/app/_lib/data/problems';

export default function ProblemsSlider() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number>(null);

    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => {
            setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 15000);

        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, [current]);

    const item = data[current];

    return (
        <article className="problems-list">
            <Problem {...item} />
            <SlidersList current={current} size={data.length} />
        </article>
    )
}