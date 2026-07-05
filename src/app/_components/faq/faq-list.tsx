'use client';

import { useState } from 'react';
import data from '@/app/_lib/data/faqs';
import FAQItem from './faq-item';

export default function FAQList() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const onSelect = (id: number) => {
        setSelectedId((current) => (current === id ? null : id));
    };

    return (
        <ul className="faq-list">
            {data.map((item) => (
                <FAQItem {...item} key={item.id} onSelect={onSelect} isActive={selectedId === item.id} />
            ))}
        </ul>
    );
}
