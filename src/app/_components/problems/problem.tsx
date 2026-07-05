import Image from 'next/image';
import { type Problem } from '@/app/_lib/data/problems';

export default function Problem({ icon, name, deficiency, impact }: Problem) {
    return (
        <div className="problem animate">
            <header className="problem-header">
                <div className="problem__img">{icon}</div>
                <h3 className="problem__name">{name}</h3>
            </header>
            <div className="problem-content">
                <p className="problem__desc">{deficiency}</p>
                <Image className="problem__arrow-img" loading="lazy" src="/icons/arrow.svg" alt="" width={24} height={24} />
                <p className="problem__desc">{impact}</p>
            </div>
        </div>
    );
}