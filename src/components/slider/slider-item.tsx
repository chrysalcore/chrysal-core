function SliderItem({ selected }: { selected: boolean }) {
    return (
        <svg
            className={`h-4 w-4 transition-all duration-100 ${selected ? 'scale-100 fill-highlight' : 'scale-75 fill-highlight/40'}`}
            width="77.450356mm"
            height="77.450371mm"
            viewBox="0 0 77.450356 77.450371"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle id="path950" cx="108.5989" cy="141.01019" r="38.725189" export-filename="circle.svg" export-xdpi="96" export-ydpi="96" />
        </svg>
    )
}

export default SliderItem;