import { type Advantage } from "../../_lib/data/advantages"

export default function Advantage({ icon, title, desc }: Advantage) {
    return (
        <li className="advantage">
            {icon}
            <div className='advantage-text'>
                <h3 className='advantage__name'>{title}</h3>
                <p className='advantage__desc'>{desc}</p>
            </div>
        </li>
    )
} 