import Link from "next/link"

function HeaderCTA() {
    return (
        <div className="cta">
            <Link href="/contact" className="cta__btn button" >Contact</Link>
        </div>
    )
}

export default HeaderCTA