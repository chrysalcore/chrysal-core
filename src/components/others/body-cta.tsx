import Link from "next/link"
import { CalendarDays } from "lucide-react"

export default function BodyCTA() {
    return (
        <div className="fixed bottom-6 right-6 lg:hidden z-50">
            <Link href="/contact" className="m-0 bg-accent rounded-lg shadow-lg/10 p-3 block" aria-label="Contact">
                <CalendarDays className="w-8 h-8 text-on-accent" aria-hidden="true" />
            </Link>
        </div>
    )
}