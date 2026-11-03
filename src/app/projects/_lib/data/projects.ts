export type Project = {
    img: `${string}.webp`
    icon: `${string}.svg` | ``
    name: string
    desc: string
    href: string
}

const data: Project[] = [
    {
        img: 'sofi-nails.webp',
        icon: 'snals.svg',
        name: 'Sofi Nails & Lashes Spa',
        desc: 'Website for a beauty salon in Salem, Virginia, built to be found on Google and to take bookings online. Since launch it has reached 1,600+ visitors, with organic search as its main source of traffic and daily search impressions up nearly 5x in a year. Redesigned in 2026 with a palette taken from the logo, readable contrast and a booking form that checks opening hours.',
        href: 'https://sofinailsandlashesspa.com'
    },
    {
        img: 'a3y.webp',
        icon: 'a3y.svg',
        name: 'A3Y Reforms',
        desc: "This project was created to provide a website for A3Y Reforms, a company that provides construction, maintenance, repairs, electrical installations, plumbing, and other services throughout the state of Virginia. The site features technologies focused on loading speed, local search optimization, and strong use of the brand's color palette.",
        href: 'https://a3yreforms.com'
    },
    {
        img: 'cevateria.webp',
        icon: '',
        name: 'Cevateria Brasil',
        desc: "Online store for Cevateria Brasil, a brand of barley capsules with chocolate. Rebuilt from a static site into a fast React app: customers add products to a cart that remembers them between visits and send the order straight to the brand's WhatsApp, the channel it already sells through.",
        href: 'https://chrysalcore.github.io/cevateria_brasil'
    },
    {
        img: 'moulin-rouge.webp',
        icon: '',
        name: 'View All Pages',
        desc: "A section with all my completed projects and a variety of templates adaptable to your needs. Don't waste any more time and run to delight in each unique example we offer. You may find exactly what you're looking for. If not, contact us and we'll make your expectations a reality.",
        href: ''
    },
    {
        img: 'moulin-rouge.webp',
        icon: 'moul.svg',
        name: 'Moulin Rouge',
        desc: 'Demo restaurant site with menu, events, online ordering and table reservations. The menu and events load from an API and each one keeps working if the other fails, the cart persists across pages, and every change has to pass 53 automated tests before it is published.',
        href: 'https://chrysalcore.github.io/moulin-rouge'
    },
    {
        img: 'vini.webp',
        icon: 'vini.svg',
        name: 'Vinilo',
        desc: 'This project was created based on the Vinilo Pizzeria, located near downtown Camagüey. Vintage record decorations mixed with modern colors make for a captivating experience.',
        href: 'https://chrysalcore.github.io/vinilo'
    },
    {
        img: 'cinc.webp',
        icon: 'cinc.svg',
        name: 'Cincotta Pizza',
        desc: "A fictional website designed with a fresh and healthy touch. Upon entering, you'll notice pleasant green colors of various shades, of course, with a strong contrast to the red, designed to direct visitors to that long-awaited reservation. Perfect for daytime outdoor restaurants, with a healthy and friendly vibe.",
        href: 'https://chrysalcore.github.io/cincotta-pizza'
    }
]

export default data