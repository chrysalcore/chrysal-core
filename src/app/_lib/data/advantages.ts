import { HandCoins, Handshake, MessagesSquare, Timer, type LucideIcon } from 'lucide-react';

export type Advantage = {
    icon: LucideIcon;
    title: string;
    desc: string;
}

const data: Advantage[] = [
    {
        icon: Timer,
        title: 'Express Delivery',
        desc: 'Landing pages ready in 7 days, multi-page sites in 2 weeks'
    },
    {
        icon: MessagesSquare,
        title: 'Direct Dev Access',
        desc: 'Work directly with your developer, no account managers'
    },
    {
        icon: Handshake,
        title: 'Free Monthly Support',
        desc: '1 month of basic support and minor changes included'
    },
    {
        icon: HandCoins,
        title: 'Accessible Prices',
        desc: 'Affordable pricing designed for local businesses and startups'
    }
]

export default data