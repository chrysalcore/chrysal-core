export type Project = {
    img: `${string}.webp`
    icon: `${string}.svg` | ``
    name: string
    desc: string
    href: string
}

const data: Project[] = [
    {
        img: 'snals.webp',
        icon: 'snals.svg',
        name: 'Sofi Nails & Lashes Spa',
        desc: 'Welcome page created to increase reach and positioning on Google for the beauty salon Sofi Nails & Lashes Spa located in Salem, Virginia. It has been improved based on customer metrics and preferences with its owner. It has increased its positioning on Google, appearing in more than 1,500 searches in two months and gaining increasing visibility.',
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
        img: 'pilar.webp',
        icon: 'pilar.svg',
        name: 'Pilar Cleaning Services LLC',
        desc: "This multi-page website was created to establish an online presence for Pilar Cleaning Services LLC, which serves Salem, Roanoke, Vinton, and surrounding areas in Virginia. Its development focused on SEO, local search optimization, fast page load times, and user experience.",
        href: 'https://pilarcleaning.com'
    },
    {
        img: 'moul.webp',
        icon: '',
        name: 'View All Pages',
        desc: "A section with all my completed projects and a variety of templates adaptable to your needs. Don't waste any more time and run to delight in each unique example we offer. You may find exactly what you're looking for. If not, contact us and we'll make your expectations a reality.",
        href: ''
    },
    {
        img: 'moul.webp',
        icon: 'moul.svg',
        name: 'Moulin Rouge',
        desc: 'Example site based on the legendary Moulin Rouge restaurant. It showcases an incredible contrast in its carefully chosen color palette, elegant and warm typography, and images that create a unique atmosphere—all with the aim of transporting the user to that wonderful dinner they should already book!',
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