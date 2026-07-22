import Link from 'next/link';
import Image from 'next/image';

function Logo({ className = 'w-6 h-6' }: { className?: string }) {
    return (
        <Link href='/' aria-label='home logo' className='flex items-center z-20'>
            <Image loading='lazy' className={className} src={'/icons/logo.svg'} alt="main logo" width={64} height={65} />
        </Link>
    )
}

export default Logo;