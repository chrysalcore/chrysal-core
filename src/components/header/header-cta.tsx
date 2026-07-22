import Link from "next/link"

function HeaderCTA() {
    return (
        <div className="hidden md:flex items-center z-20">
            <Link href="/contact" className="py-2 px-8 text-sm font-semibold uppercase tracking-widest bg-cta text-domain rounded">Contact</Link>
        </div>
    )
}

export default HeaderCTA