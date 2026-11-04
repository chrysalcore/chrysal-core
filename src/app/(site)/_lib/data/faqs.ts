export type FAQItem = {
    id: number;
    question: string;
    answer: string;
};

const data: FAQItem[] = [
    {
        id: 1,
        question: 'Can you really deliver in 7 days?',
        answer: 'Yes, we specialize in agile development for local businesses.',
    },
    {
        id: 2,
        question: 'Why are your prices more affordable?',
        answer: 'Our business model and location allow us to offer competitive rates while maintaining high quality standards.',
    },
    {
        id: 3,
        question: 'Do you work with service-based businesses?',
        answer: 'Absolutely! We specialize in local service providers, restaurants, retailers, and professionals.',
    },
    {
        id: 4,
        question: "What's included in your service?",
        answer: 'Custom design, development, basic SEO setup, training to manage your site and 1 month of basic technical support and minor content updates at no extra cost.',
    },
];

export default data;
