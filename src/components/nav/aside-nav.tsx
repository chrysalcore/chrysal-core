'use client'

import NavLink from './nav-link'
import data from '../../lib/data/navigation'
import { useState } from 'react'

export default function AsideNav() {
    const [active, setActive] = useState(false)

    const onToggleMenu = () => {
        setActive((prevState) => !prevState)
    }

    return (
        <>
            <button className='md:hidden justify-self-end fill-white z-20' onClick={onToggleMenu} aria-label='Toggle menu'>
                <svg className='fill-primary' xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 34.96 25.03">
                    <path d="M0,12.13c.67-1.7,1.24-2.09,3.05-2.09,9.62,0,19.23,0,28.85,0,1.8,0,2.38.4,3.06,2.09v.78c-.7,1.71-1.26,2.09-3.13,2.09-9.57,0-19.14,0-28.71,0-1.88,0-2.42-.37-3.13-2.09v-.78Z"/>
                    <path d="M0,2.02C.51.56,1.55-.02,3.08,0c3.88.04,7.77,0,11.65.02,1.7,0,2.78,1.09,2.71,2.69-.05,1.19-1.03,2.26-2.22,2.27-4.32.03-8.65.04-12.97,0-1.25-.01-1.88-.91-2.25-2.01v-.93Z"/>
                    <path d="M34.96,23c-.53,1.49-1.6,2.05-3.16,2.03-3.83-.05-7.66,0-11.49-.02-1.75,0-2.83-1.02-2.8-2.6.03-1.27,1.02-2.35,2.3-2.36,4.27-.03,8.54-.03,12.81,0,1.29.01,1.95.89,2.34,2.02v.93Z"/>
                </svg>
            </button>
            <nav className={`flex md:hidden justify-center items-end w-full max-h-0 absolute bg-domain overflow-clip left-0 top-0 -z-10 transition-all ${active? 'pt-16 pb-4 max-h-[16dvh]' : ''}`}>
                <ul className="flex px-[40dvw] max-w-dvw gap-4 overflow-auto scrollbar-none snap-mandatory snap-center">
                    {data.map(item => {
                        return (
                            <NavLink key={item.text} {...item} />
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}