import SliderItem from './slider-item';

function SlidersList({ current, size }: { current: number; size: number }) {
    return (
        <div className="slider-list">
            {Array.from({ length: size }, (_, i) => (
                <SliderItem selected={i === current} key={i} />
            ))}
        </div>
    )
}

export default SlidersList