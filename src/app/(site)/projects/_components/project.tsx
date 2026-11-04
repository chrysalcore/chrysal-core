import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { type Project } from '../_lib/data/projects';

export default function Project({ img, icon, name, desc, href }: Project) {
    return (
        <li className="shadow-card flex max-w-[min(20rem,95dvw)] shrink-0 grow-0 basis-[min(20rem,95dvw)] snap-center flex-col gap-4 overflow-clip rounded-lg bg-surface text-left">
            <Image
                className="aspect-5/3 w-full object-cover"
                loading="lazy"
                src={`/imgs/${img}`}
                alt={`${name} preview`}
                width={1280}
                height={768}
                sizes="20rem"
            />
            <div className="relative flex h-full flex-col gap-4 p-4 pb-16">
                <header className="flex min-h-8 items-center gap-4">
                    {icon ? (
                        <Image
                            loading="lazy"
                            className="h-8 w-8"
                            src={`/icons/${icon}`}
                            alt=""
                            width={64}
                            height={64}
                        />
                    ) : null}
                    <h3 className="truncate text-lg font-medium">{name}</h3>
                </header>
                <p className="line-clamp-6">{desc}</p>
                {href !== '' ? (
                    <Link
                        className="absolute bottom-4 left-4 button-accent"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                ) : (
                    <Link className="absolute bottom-4 left-4 button-accent" href="/projects">
                        Visit
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                )}
            </div>
        </li>
    );
}
