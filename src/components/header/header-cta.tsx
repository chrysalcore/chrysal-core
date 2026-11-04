import Link from "next/link"

function HeaderCTA() {
    return (
        <div className="hidden md:flex items-center z-20">
            <Link href="/contact" className="button-accent">Contact</Link>
        </div>
    )
}

export default HeaderCTA