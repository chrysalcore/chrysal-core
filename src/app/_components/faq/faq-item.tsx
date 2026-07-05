import { type FAQItem } from '@/app/_lib/data/faqs';

export default function FAQItem({ id, question, answer, isActive, onSelect }: FAQItem & { isActive: boolean; onSelect: (id: number) => void }) {
    return (
    <li className="faq-item">
        <button className={`faq-item__question ${isActive ? 'active' : ''}`} onClick={() => onSelect(id)}>
            {question}
        </button>
        <p className="faq-item__answer">{answer}</p>
    </li>
    );
}