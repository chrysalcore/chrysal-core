import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '../_lib/data/projects';

export default function Project({ img, icon, name, desc, href }: Project) {
    return (
        <li className="shrink-0 grow-0 basis-[min(20rem,95dvw)] flex flex-col gap-4 max-w-[min(20rem,95dvw)] text-left bg-dark rounded-lg shadow-card snap-center overflow-clip">
            <Image className="w-full h-48" loading="lazy" src={`/imgs/${img}`} alt="project image" width={640} height={400} />
            <div className="flex flex-col gap-4 p-4 pb-16 h-full relative">
                <header className="flex items-center gap-4">
                    {icon ? <Image loading="lazy" className="w-8 h-8" src={`/icons/${icon}`} alt="" width={64} height={64} /> : null}
                    <h3 className="truncate">{name}</h3>
                </header>
                <p className="text-sm">{desc}</p>
                {href !== '' ? (
                    <Link className="absolute left-4 bottom-4 text-domain py-2 px-8 text-sm font-semibold uppercase tracking-widest bg-cta rounded" href={href} target="_blank" rel="noopener noreferrer">
                        Visit
                    </Link>
                ) : (
                    <Link className="absolute left-4 bottom-4 text-domain py-2 px-8 text-sm font-semibold uppercase tracking-widest bg-cta rounded" href="/projects">
                        Visit
                    </Link>
                )}
            </div>
        </li>
    );
}