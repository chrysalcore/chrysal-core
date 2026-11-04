import { type Advantage } from "../../_lib/data/advantages"

export default function Advantage({ icon: Icon, title, desc }: Advantage) {
    return (
        <li className="flex items-start gap-6 py-8 border-t border-divider">
            <Icon className="w-10 h-10 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <div className='flex flex-col gap-2'>
                <h3 className='text-accent text-lg font-medium'>{title}</h3>
                <p className="text-muted">{desc}</p>
            </div>
        </li>
    )
}
