import data from '../../_lib/data/services';
import Service from './service';

export default function ServicesList() {
    return (
        <ul className="services-list">
            {data.map((item) => <Service {...item} key={item.name} />)}
        </ul>
    );
}
