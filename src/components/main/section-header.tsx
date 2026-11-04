function SectionHeader({
    eyebrow,
    title,
    desc,
    alignStart = false,
}: {
    eyebrow: string;
    title: string;
    desc: string;
    alignStart?: boolean;
}) {
    return (
        <header
            className={`flex max-w-3xl flex-col gap-4 ${alignStart ? 'items-start' : 'items-center self-center px-4 text-center'}`}
        >
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">{eyebrow}</p>
            <h2 className="text-4xl font-medium lg:text-5xl">{title}</h2>
            <p className="max-w-xl text-muted">{desc}</p>
        </header>
    );
}

export default SectionHeader;
