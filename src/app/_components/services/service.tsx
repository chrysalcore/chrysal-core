import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { type Service } from '@/app/_lib/data/services';

export default function Service({ img, name, chars }: Service) {
    return (
        <li className="shadow-card flex shrink-0 grow-0 basis-[min(18rem,90dvw)] snap-center flex-col overflow-clip rounded-lg bg-band text-left">
            <Image
                className="aspect-video w-full bg-control object-contain p-2"
                loading="lazy"
                src={`/imgs/${img}`}
                alt=""
                width={1376}
                height={768}
                sizes="18rem"
            />
            <div className="flex grow flex-col gap-4 p-4">
                <h3 className="text-lg font-medium text-accent">{name}</h3>
                <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-accent">
                    {chars.map((char) => (
                        <li key={char}>{char}</li>
                    ))}
                </ul>
                <Link href="/contact" className="mt-auto button-accent max-w-[70dvw] self-start">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Reserve Meet
                </Link>
            </div>
        </li>
    );
}
