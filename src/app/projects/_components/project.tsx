import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '../_lib/data/projects';

export default function Project({ img, icon, name, desc, href }: Project) {
    return (
        <li className="project">
            <Image className="project__img" loading="lazy" src={`/imgs/${img}`} alt="project image" width={640} height={400} />
            <div className="project-text">
                <header className="project-header">
                    {icon ? <Image loading="lazy" className="project__icon" src={`/icons/${icon}`} alt="" width={64} height={64} /> : null}
                    <h3 className="project__name">{name}</h3>
                </header>
                <p className="project__desc">{desc}</p>
                {href !== '' ? (
                    <Link className="project__btn button" href={href} target="_blank" rel="noopener noreferrer">
                        Visit
                    </Link>
                ) : (
                    <Link className="project__btn button" href="/projects">
                        Visit
                    </Link>
                )}
            </div>
        </li>
    );
}