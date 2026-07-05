import { type Advantage } from "../../_lib/data/advantages"

export default function Advantage({ icon, title, desc }: Advantage) {
    return (
        <li className="grow shrink-0 basis-[min(20rem,100%)] flex items-center gap-6 p-4 text-left even:flex-row-reverse even:text-right bg-dark rounded-lg shadow-card">
            <div className="w-16 h-16 shrink-0">{icon}</div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-primary'>{title}</h3>
                <p className='text-sm'>{desc}</p>
            </div>
        </li>
    )
} 