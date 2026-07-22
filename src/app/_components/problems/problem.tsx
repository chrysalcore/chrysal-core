import Image from 'next/image';
import { type Problem } from '@/app/_lib/data/problems';

export default function Problem({ icon, name, deficiency, impact }: Problem) {
    return (
        <div className="animate-[fade_15s_linear_both] flex flex-col gap-6 p-6 min-w-[min(18rem,100%)] min-h-80 bg-dark rounded-lg shadow-card">
            <header className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 fill-primary">{icon}</div>
                <h3 className="text-primary">{name}</h3>
            </header>
            <div className="flex flex-col items-center">
                <p className="text-sm">{deficiency}</p>
                <Image className="w-10 h-10 -rotate-90" loading="lazy" src="/icons/arrow.svg" alt="" width={24} height={24} />
                <p className="text-sm text-cta">{impact}</p>
            </div>
        </div>
    );
}