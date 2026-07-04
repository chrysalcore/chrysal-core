import Advantage from "./advantage"
import data from "../../_lib/data/advantages"

function AdvantagesList() {
    return (
        <ul className="advantages-list">
            {data.map(item => <Advantage {...item} key={item.title} />)}
        </ul>
    )
}

export default AdvantagesList