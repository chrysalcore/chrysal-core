import Image from "next/image"
import Link from "next/link"
import { type Project } from "../_lib/data/projects"

export default function Project({ img, icon, name, desc, href }: Project) {
    const handleClick = () => {
        window.open(href, '__blank', 'noopener noreferrer')
    }

    return (
        <li className="project">
            <Image className="project__img" loading="lazy" src={`/imgs/${img}`} alt="project image" />
            <div className="project-text">
                <header className="project-header">
                    {icon && <Image loading="lazy" className="project__icon" src={`/icons/${icon}`} alt="" />}
                    <h3 className="project__name">{name}</h3>
                </header>
                <p className="project__desc">{desc}</p>
                { href !== ''?
                    <button className="project__btn button" onClick={handleClick}>Visit</button>
                    :
                    <Link href='/projects' className="project__btn button">Visit</Link>}
            </div>
        </li>
    )
}