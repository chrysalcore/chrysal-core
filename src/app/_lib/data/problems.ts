import { MessageCircleOff, Palette, ServerCrash, Snail, type LucideIcon } from 'lucide-react';

export type Problem = {
    icon: LucideIcon;
    name: string;
    deficiency: string;
    impact: string;
};

const data: Problem[] = [
    {
        icon: Snail,
        name: 'Slow Loading Times',
        deficiency: 'Websites built with bloated templates or unoptimized code.',
        impact: "Leads to high bounce rates, poor SEO rankings, and lost customers who won't wait."
    },
    {
        icon: Palette,
        name: 'Low Customization',
        deficiency: 'Rigid, template-based designs from CMS platforms that limit your uniqueness.',
        impact: "Your website looks like everyone else's and can't adapt to your specific business workflows."
    },
    {
        icon: ServerCrash,
        name: 'Difficulty Scaling',
        deficiency: 'Websites that break or become slow when you add new features or get more traffic.',
        impact: "Your growth is hampered by your own website, requiring expensive rebuilds down the line."
    },
    {
        icon: MessageCircleOff,
        name: 'Indirect Communication',
        deficiency: 'Dealing with account managers, slow email chains, and lost-in-translation feedback.',
        impact: 'Frustrating delays, misunderstandings, and a feeling that no one is truly responsible for your project.'
    }
]

export default data