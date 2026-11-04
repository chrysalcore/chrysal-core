import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { type Service } from '@/app/_lib/data/services';

export default function Service({ img, name, chars }: Service) {
    return (
        <li className="shrink-0 grow-0 basis-[min(18rem,90dvw)] flex flex-col text-left bg-band rounded-lg shadow-card snap-center overflow-clip">
            <Image className="w-full aspect-video p-2 bg-control object-contain" loading="lazy" src={`/icons/${img}`} alt={`${name} image`} width={320} height={180} />
            <div className="grow flex flex-col gap-4 p-4">
                <h3 className="text-accent text-lg font-medium">{name}</h3>
                <ul className="flex flex-col gap-2 pl-6 list-disc marker:text-accent">
                    {chars.map((char) => (
                        <li key={char}>
                        {char}
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className="self-start mt-auto max-w-[70dvw] button-accent">
                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                    Reserve Meet
                </Link>
            </div>
        </li>
    );
}
