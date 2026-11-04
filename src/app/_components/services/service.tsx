import Image from 'next/image';
import Link from 'next/link';
import { type Service } from '@/app/_lib/data/services';

export default function Service({ img, name, chars }: Service) {
    return (
        <li className="shrink-0 grow-0 basis-[min(18rem,90dvw)] flex flex-col gap-4 p-4 text-left bg-band rounded-lg shadow-card snap-center">
            <Image className="w-full max-w-72 aspect-video p-2 bg-control rounded object-contain" loading="lazy" src={`/icons/${img}`} alt={`${name} image`} width={320} height={180} />
            <div className="flex flex-col gap-4">
                <h3 className="text-accent font-medium">{name}</h3>
                <ul className="flex flex-col gap-2 p-6 list-disc">
                    {chars.map((char) => (
                        <li key={char}>
                        {char}
                        </li>
                    ))}
                </ul>
            </div>
            <Link href="/contact" className="self-start max-w-[70dvw] button-accent">
                Reserve Meet
            </Link>
        </li>
    );
}