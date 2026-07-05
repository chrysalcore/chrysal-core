import data from '../../_lib/data/services';
import Service from './service';

export default function ServicesList() {
    return (
        <ul className="flex gap-4 p-4 max-w-dvw overflow-x-auto snap-x snap-mandatory scrollbar-none md:justify-evenly">
            {data.map((item) => <Service {...item} key={item.name} />)}
        </ul>
    );
}
