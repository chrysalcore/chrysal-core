'use client';

import { useEffect, useRef, useState } from 'react';

export function useAutoSlider(length: number, delay: number) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number>(null);

    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        }, delay);

        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, [current, length, delay]);

    return current;
}
