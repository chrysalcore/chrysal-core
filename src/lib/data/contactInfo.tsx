import { Mail } from 'lucide-react';
import { siGithub, siTelegram, siWhatsapp } from 'simple-icons';
import BrandIcon from '@/components/others/brand-icon';

type ContactItem = {
    icon: React.ReactNode;
    name: string;
    text: string;
    href: string;
}

const data: ContactItem[] = [
    {
        icon: <BrandIcon icon={siWhatsapp} />,
        name: 'WhatsApp',
        text: '+55 (95)92000-5560',
        href: 'https://wa.me/5595920005560'
    },
    {
        icon: <BrandIcon icon={siTelegram} />,
        name: 'Telegram',
        text: '@chrysalcore',
        href: 'https://t.me/chrysalcore'
    },
    {
        icon: <Mail className="w-full h-full" strokeWidth={2} aria-hidden="true" />,
        name: 'Send Email',
        text: 'owner@chrysalcore.com',
        href: 'mailto:owner@chrysalcore.com'
    },
    {
        icon: <BrandIcon icon={siGithub} />,
        name: 'Visit Repositories',
        text: 'github.com/chrysalcore',
        href: 'https://github.com/chrysalcore'
    }
]

export default data