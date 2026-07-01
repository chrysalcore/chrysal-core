import NavLink from './nav-link'
import data from '../../lib/data/navigation'

export default function Nav() {
    return (
        <nav className='hidden lg:flex justify-center items-center p-0 z-20'>
            <ul className="flex gap-6">
            {data.map(item => {
                return (
                    <NavLink key={item.text} {...item} />
                )
            })}
            </ul>
        </nav>
    )
}