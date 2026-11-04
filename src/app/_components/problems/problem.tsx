import { ChevronDown } from 'lucide-react';
import { type Problem } from '@/app/_lib/data/problems';

export default function Problem({ icon: Icon, name, deficiency, impact }: Problem) {
    return (
        <div className="animate-[fade_15s_linear_both] flex flex-col gap-6 p-6 min-w-[min(18rem,100%)] min-h-80 bg-surface/50 backdrop-blur-sm rounded-lg shadow-card">
            <header className="flex items-center gap-4">
                <Icon className="w-10 h-10 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-accent text-lg font-medium">{name}</h3>
            </header>
            <div className="flex flex-col gap-2">
                <p>{deficiency}</p>
                <ChevronDown className="w-6 h-6 text-accent" strokeWidth={2} aria-hidden="true" />
                <p className="text-highlight">{impact}</p>
            </div>
        </div>
    );
}
