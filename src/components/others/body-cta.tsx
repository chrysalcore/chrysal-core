import Link from "next/link"

export default function BodyCTA() {
    return (
        <div className="fixed bottom-6 right-6 lg:hidden z-50">
            <Link href="contact/" className="m-0 bg-primary rounded-lg shadow-lg/10 p-3 block">
                <svg className="fill-dark" xmlns="http://www.w3.org/2000/svg" height={32} viewBox="0 -960 960 960" width={32}>
                    <path d="M509-269q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
                </svg>
            </Link>
        </div>
    )
}