import { type Field } from '@/app/contact/_lib/data/fields';

export default function Field({ label, name, type, placeholder, value, state, onChange }: Field & { state: string; onChange: (value: string) => void }) {
    return (
        <label className="contact-form__field" htmlFor={name}>
        <span className="contact-form__label">{label}</span>
        {type === 'option' ? (
            <select className="contact-form__input" name={name} id={name} value={state} onChange={(event) => onChange(event.target.value)}>
            {(value as string[]).map((val) => (
                <option className="contact-form__option" value={val.toLowerCase()} key={val}>
                {val}
                </option>
            ))}
            </select>
        ) : type === 'textarea' ? (
            <textarea
            className="contact-form__input"
            name={name}
            id={name}
            placeholder={placeholder}
            rows={6}
            value={state}
            onChange={(event) => onChange(event.target.value)}
            />
        ) : (
            <input
            className="contact-form__input"
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