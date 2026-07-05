function SectionHeader({ title, desc }: { title: string; desc: string }) {
    return (
        <header className='flex flex-col items-center gap-8 max-w-sm text-center'>
            <h2 className='text-3xl'>{title}</h2>
            <p className='text-light text-sm'>{desc}</p>
        </header>
    )
}

export default SectionHeader