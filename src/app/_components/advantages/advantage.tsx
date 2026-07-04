import Image from "next/image"
import { type Advantage } from "../../_lib/data/advantages"

export default function Advantage({ icon, title, desc }: Advantage) {
    return (
        <li className="advantage">
            <Image className='advantage__img' loading="lazy" src={`/icons/${icon}`} alt="" />
            <div className='advantage-text'>
                <h3 className='advantage__name'>{title}</h3>
                <p className='advantage__desc'>{desc}</p>
            </div>
        </li>
    )
} 