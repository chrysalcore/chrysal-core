import Link from "next/link"

function HeroCTA() {
    return (
        <div className="flex items-center">
            <Link href="/projects" className="py-2 px-8 text-sm font-semibold uppercase tracking-widest text-accent bg-transparent border border-accent rounded">View Examples</Link>
        </div>
    )
}

export default HeroCTA