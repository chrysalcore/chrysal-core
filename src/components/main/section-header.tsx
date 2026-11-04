function SectionHeader({ eyebrow, title, desc, alignStart = false }: { eyebrow: string; title: string; desc: string; alignStart?: boolean }) {
    return (
        <header className={`flex flex-col gap-4 max-w-3xl ${alignStart ? 'items-start' : 'self-center items-center px-4 text-center'}`}>
            <p className='text-accent text-xs font-semibold uppercase tracking-widest'>{eyebrow}</p>
            <h2 className='text-4xl lg:text-5xl font-medium'>{title}</h2>
            <p className='max-w-xl text-muted'>{desc}</p>
        </header>
    )
}

export default SectionHeader
