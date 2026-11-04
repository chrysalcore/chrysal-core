import data from '@/app/_lib/data/faqs';
import FAQItem from './faq-item';

export default function FAQList() {
    return (
        <ul className="grid gap-x-16 border-b border-divider md:grid-cols-2">
            {data.map((item) => (
                <FAQItem {...item} key={item.id} />
            ))}
        </ul>
    );
}
