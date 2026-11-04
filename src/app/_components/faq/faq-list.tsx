import data from '@/app/_lib/data/faqs';
import FAQItem from './faq-item';

export default function FAQList() {
    return (
        <ul className="grid md:grid-cols-2 gap-x-16 border-b border-divider">
            {data.map((item) => (
                <FAQItem {...item} key={item.id} />
            ))}
        </ul>
    );
}
