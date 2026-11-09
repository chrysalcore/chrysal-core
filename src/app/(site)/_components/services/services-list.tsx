import data from '../../_lib/data/services';
import Service from './service';

export default function ServicesList() {
    return (
        <ul className="flex max-w-dvw snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto p-4 md:justify-evenly">
            {data.map((item) => (
                <Service {...item} key={item.name} />
            ))}
        </ul>
    );
}
