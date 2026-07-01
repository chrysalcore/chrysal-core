import Link from 'next/link';
import Image from 'next/image';

function Logo() {
    return (
        <Link href='/' aria-label='home logo' className='logo-container'>
            <Image loading='lazy' className='logo' src={'/icons/logo.svg'} alt="main logo" />
        </Link>
    )
}

export default Logo;