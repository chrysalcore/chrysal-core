'use client'

import Link from "next/link";
import { type NavItem } from "../../lib/data/navigation";
import { usePathname } from "next/navigation";

export default function NavLink({ href, text }: NavItem) {
    const currentPath = usePathname()
    const isActive = text !== 'Home' && currentPath.startsWith(href) || href === currentPath 

    return (
        <li>
            <Link href={href} className={`text-xs uppercase tracking-[0.2rem] transition-all ${isActive ? 'text-accent font-semibold' : ''}`}>{text}</Link>
        </li>
    );
}