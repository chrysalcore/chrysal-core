import Advantage from "./advantage"
import data from "../../_lib/data/advantages"

function AdvantagesList() {
    return (
        <ul className="flex flex-wrap gap-6">
            {data.map(item => <Advantage {...item} key={item.title} />)}
        </ul>
    )
}

export default AdvantagesList