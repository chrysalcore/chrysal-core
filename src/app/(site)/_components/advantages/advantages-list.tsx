import Advantage from './advantage';
import data from '../../_lib/data/advantages';

function AdvantagesList() {
    return (
        <ul className="grid gap-x-16 md:grid-cols-2">
            {data.map((item) => (
                <Advantage {...item} key={item.title} />
            ))}
        </ul>
    );
}

export default AdvantagesList;
