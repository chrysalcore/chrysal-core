import { type SimpleIcon } from 'simple-icons';

export default function BrandIcon({ icon }: { icon: SimpleIcon }) {
    return (
        <svg className="h-full w-full" viewBox="0 0 24 24" aria-hidden="true">
            <path d={icon.path} />
        </svg>
    );
}
