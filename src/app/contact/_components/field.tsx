import { type Field } from '@/app/contact/_lib/data/fields';

export default function Field({ label, name, type, placeholder, value, state, onChange }: Field & { state: string; onChange: (value: string) => void }) {
    return (
        <label className="flex flex-col gap-2" htmlFor={name}>
        <span className="text-primary text-base font-semibold">{label}</span>
        {type === 'option' ? (
            <select className="py-3 px-4 text-base bg-[#222] rounded border-none" name={name} id={name} value={state} onChange={(event) => onChange(event.target.value)}>
            {(value as string[]).map((val) => (
                <option value={val.toLowerCase()} key={val}>
                {val}
                </option>
            ))}
            </select>
        ) : type === 'textarea' ? (
            <textarea
            className="py-3 px-4 text-base bg-[#222] rounded border-none resize-none"
            name={name}
            id={name}
            placeholder={placeholder}
            rows={6}
            value={state}
            onChange={(event) => onChange(event.target.value)}
            />
        ) : (
            <input
            className="py-3 px-4 text-base bg-[#222] rounded border-none"
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={state}
            onChange={(event) => onChange(event.target.value)}
            />
        )}
        </label>
    );
}