function SectionHeader({ title, desc }: { title: string; desc: string }) {
    return (
        <header className='flex flex-col self-center items-center gap-8 max-w-100 text-center'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-light text-sm'>{desc}</p>
        </header>
    )
}

export default SectionHeader