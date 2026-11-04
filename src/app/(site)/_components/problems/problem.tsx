import { ChevronDown } from 'lucide-react';
import { type Problem } from '@/app/_lib/data/problems';

export default function Problem({ icon: Icon, name, deficiency, impact }: Problem) {
    return (
        <div className="shadow-card flex min-h-80 min-w-[min(18rem,100%)] animate-[fade_15s_linear_both] flex-col gap-6 rounded-lg bg-surface/50 p-6 backdrop-blur-sm">
            <header className="flex items-center gap-4">
                <Icon className="h-10 w-10 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-lg font-medium text-accent">{name}</h3>
            </header>
            <div className="flex flex-col gap-2">
                <p>{deficiency}</p>
                <ChevronDown className="h-6 w-6 text-accent" strokeWidth={2} aria-hidden="true" />
                <p className="text-highlight">{impact}</p>
            </div>
        </div>
    );
}
