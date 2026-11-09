import { type Advantage } from '../../_lib/data/advantages';

export default function Advantage({ icon: Icon, title, desc }: Advantage) {
    return (
        <li className="flex items-start gap-6 border-t border-divider py-8">
            <Icon className="h-10 w-10 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-accent">{title}</h3>
                <p className="text-muted">{desc}</p>
            </div>
        </li>
    );
}
