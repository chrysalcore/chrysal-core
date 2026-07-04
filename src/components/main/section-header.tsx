function SectionHeader({ title, desc }: { title: string; desc: string }) {
    return (
        <header className='section-header'>
            <h2 className='section-header__title'>{title}</h2>
            <p className='section-header__desc'>{desc}</p>
        </header>
    )
}

export default SectionHeader