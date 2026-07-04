import Link from "next/link"

function HeroCTA() {
    return (
        <div className="cta">
            <Link href="/projects" className="cta__btn button" >View Examples</Link>
        </div>
    )
}

export default HeroCTA