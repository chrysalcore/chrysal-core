import Link from "next/link"

function HeaderCTA() {
    return (
        <div className="flex items-center">
            <Link href="/contact" className="py-2 px-8 text-sm font-semibold uppercase tracking-widest bg-cta rounded">Contact</Link>
        </div>
    )
}

export default HeaderCTA