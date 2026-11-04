import Image from 'next/image';
import { type FAQItem } from '@/app/_lib/data/faqs';

export default function FAQItem({ id, question, answer, isActive, onSelect }: FAQItem & { isActive: boolean; onSelect: (id: number) => void }) {
    return (
    <li className="shrink-0 grow-0 basis-[min(18rem,100%)] flex flex-col gap-6 p-4 max-w-80 bg-surface rounded-lg shadow-card relative">
        <button className="self-stretch w-[90%] text-highlight text-base text-left bg-transparent border-none" onClick={() => onSelect(id)}>
            {question}
        </button>
        <Image
            className={`w-4 h-4 absolute right-[1.2rem] top-[1.2rem] transition-transform duration-500 ${isActive ? 'rotate-90' : '-rotate-90'}`}
            src="/icons/back.svg"
            alt=""
            width={16}
            height={16}
        />
        <p className={`text-muted text-sm overflow-y-clip transition-[max-height] duration-500 ${isActive ? 'max-h-40' : 'max-h-0'}`}>{answer}</p>
    </li>
    );
}