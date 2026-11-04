import Image from 'next/image';
import { type FAQItem } from '@/app/_lib/data/faqs';

export default function FAQItem({ question, answer }: FAQItem) {
    return (
        <li className="border-t border-divider">
            <details name="faq" className="group">
                <summary className="flex justify-between items-center gap-4 py-6 font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    {question}
                    <Image className="w-4 h-4 shrink-0 -rotate-90 transition-transform duration-300 group-open:rotate-90" src="/icons/back.svg" alt="" width={16} height={16} />
                </summary>
                <p className="pb-6 text-muted">{answer}</p>
            </details>
        </li>
    );
}
