import Link from "next/link"
import { MessageCircle } from "lucide-react"

function HeaderCTA() {
    return (
        <div className="hidden md:flex items-center z-20">
            <Link href="/contact" className="button-accent">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Contact
            </Link>
        </div>
    )
}

export default HeaderCTA