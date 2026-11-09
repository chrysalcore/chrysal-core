export type Section = 'problems' | 'advantages' | 'services' | 'process' | 'projects' | 'faq' | 'contact';

type SectionData = {
    [key in Section]: {
        eyebrow: string;
        title: string;
        desc: string;
    };
};

const data: SectionData = {
    problems: {
        eyebrow: 'The problem',
        title: 'Struggling to Compete Online?',
        desc: "Many local businesses face the same digital challenges - we're here to solve them with tailored web solutions",
    },
    advantages: {
        eyebrow: 'Why us',
        title: 'What Makes Us Different',
        desc: 'We focus on what truly matters for local business growth and visibility',
    },
    services: {
        eyebrow: 'Services',
        title: 'Tailored Web Solutions',
        desc: 'Custom development services designed specifically for local business needs',
    },
    process: {
        eyebrow: 'Process',
        title: 'Simple & Transparent Process',
        desc: 'From concept to launch in days, not weeks - clear steps with no surprises',
    },
    projects: {
        eyebrow: 'Portfolio',
        title: 'See Our Capabilities',
        desc: "Explore recent projects and see how we've helped local businesses establish their digital presence",
    },
    faq: {
        eyebrow: 'FAQ',
        title: 'Common Questions',
        desc: 'Everything you need to know about our services and process',
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Ready to Grow Your Online Presence?',
        desc: "Let's build a website that truly represents your local business and drives results",
    },
};

export default data;
