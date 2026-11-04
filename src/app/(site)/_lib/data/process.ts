export type ProcessStep = {
    step: number;
    name: string;
    desc: string;
    days: string;
};

const data: ProcessStep[] = [
    {
        step: 1,
        name: 'Consultation & Planning',
        desc: 'We discuss your business goals and create a detailed project plan',
        days: '1',
    },
    {
        step: 2,
        name: 'Design & Development',
        desc: 'We build your website using modern frameworks and best practices',
        days: '2-4',
    },
    {
        step: 3,
        name: 'Review & Refinement',
        desc: 'You test the website and we make adjustments based on your feedback',
        days: '5-6',
    },
    {
        step: 4,
        name: 'Launch & Training',
        desc: 'We deploy your site and provide training plus ongoing support',
        days: '7',
    },
];

export default data;
