import { ChevronDown } from 'lucide-react';
import { type FAQItem } from '@/app/_lib/data/faqs';

export default function FAQItem({ question, answer }: FAQItem) {
    return (
        <li className="border-t border-divider">
            <details name="faq" className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-medium [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown
                        className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                        aria-hidden="true"
                    />
                </summary>
                <p className="pb-6 text-muted">{answer}</p>
            </details>
        </li>
    );
}
