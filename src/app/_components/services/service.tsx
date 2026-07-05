import Image from 'next/image';
import Link from 'next/link';
import { type Service } from '@/app/_lib/data/services';

export default function Service({ img, name, chars }: Service) {
    return (
        <li className="service">
        <Image className="service__img" loading="lazy" src={`/icons/${img}`} alt={`${name} image`} width={64} height={64} />
        <div className="service-info">
            <h3 className="service__name">{name}</h3>
            <ul className="service-chars">
                {chars.map((char) => (
                    <li className="service-chars__char" key={char}>
                    {char}
                    </li>
                ))}
            </ul>
        </div>
        <Link href="/contact" className="service__btn button">
            Reserve Meet
        </Link>
        </li>
    );
}