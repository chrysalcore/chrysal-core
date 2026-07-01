type Section = "problems" | "advantages" | "services" | "process" | "projects" | "faq" | "contact"

type SectionData = {
    [key in Section]: {
        title: string
        desc: string
    }
}

const data: SectionData = {
    problems: {
        title: 'Struggling to Compete Online?',
        desc: "Many local businesses face the same digital challenges - we're here to solve them with tailored web solutions"
    },
    advantages : {
        title: 'What Makes Us Different',
        desc: "We focus on what truly matters for local business growth and visibility"
    },
    services: {
        title: 'Tailored Web Solutions',
        desc: 'Custom development services designed specifically for local business needs'
    },
    process: {
        title: 'Simple & Transparent Process',
        desc: 'From concept to launch in days, not weeks - clear steps with no surprises'
    },
    projects: {
        title: 'See Our Capabilities',
        desc: "Explore recent projects and see how we've helped local businesses establish their digital presence"
    },
    faq: {
        title: 'Common Questions',
        desc: 'Everything you need to know about our services and process'
    },
    contact: {
        title: 'Ready to Grow Your Online Presence?',
        desc: "Let's build a website that truly represents your local business and drives results"
    }
}

export default data