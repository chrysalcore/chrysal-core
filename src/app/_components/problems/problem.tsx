import Image from 'next/image';
import { type Problem } from '@/app/_lib/data/problems';

export default function Problem({ icon, name, deficiency, impact }: Problem) {
    return (
        <div className="animate-[fade_15s_linear_both] flex flex-col gap-6 p-6 min-w-[min(18rem,100%)] min-h-80 bg-surface/50 backdrop-blur-sm rounded-lg shadow-card">
            <header className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 fill-accent">{icon}</div>
                <h3 className="text-accent text-lg font-medium">{name}</h3>
            </header>
            <div className="flex flex-col gap-2">
                <p>{deficiency}</p>
                <Image className="w-8 h-8 -rotate-90" loading="lazy" src="/icons/arrow.svg" alt="" width={24} height={24} />
                <p className="text-highlight">{impact}</p>
            </div>
        </div>
    );
}
