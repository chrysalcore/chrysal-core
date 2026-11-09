import NavLink from './nav-link';
import data from '../../lib/data/navigation';

export default function Nav() {
    return (
        <nav className="z-20 hidden items-center justify-center p-0 md:flex">
            <ul className="flex gap-12">
                {data.map((item) => {
                    return <NavLink key={item.text} {...item} />;
                })}
            </ul>
        </nav>
    );
}
