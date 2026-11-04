import Link from "next/link"
import { ArrowRight } from "lucide-react"

function HeroCTA() {
    return (
        <div className="flex items-center">
            <Link href="/projects" className="inline-flex items-center gap-2 py-2 px-8 text-sm font-semibold uppercase tracking-widest text-accent bg-transparent border border-accent rounded">
                View Examples
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
        </div>
    )
}

export default HeroCTA