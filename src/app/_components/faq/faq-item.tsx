import { ChevronDown } from 'lucide-react';
import { type FAQItem } from '@/app/_lib/data/faqs';

export default function FAQItem({ question, answer }: FAQItem) {
    return (
        <li className="border-t border-divider">
            <details name="faq" className="group">
                <summary className="flex justify-between items-center gap-4 py-6 font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown className="w-5 h-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-6 text-muted">{answer}</p>
            </details>
        </li>
    );
}
