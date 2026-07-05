'use client';

import { useMemo, useState } from 'react';
import Field from './field';
import formData from '@/app/contact/_lib/data/fields';

type FormState = {
    name: string;
    type: string;
    description: string;
};

export default function Form() {
    const [fields, setFields] = useState<FormState>({
        name: '',
        type: 'landing',
        description: '',
    });

    const fixedData = useMemo(
        () =>
        formData.map((input) => ({
            ...input,
            state: fields[input.name as keyof FormState],
            onChange: (value: string) => setFields((current) => ({ ...current, [input.name]: value })),
        })),
        [fields]
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = `Name: ${fields.name}\n\nMessage:\n${fields.description}`;
        const subject = encodeURIComponent(fields.type);
        const encodedBody = encodeURIComponent(body);

        window.open(`mailto:owner@chrysalcore.com?subject=${subject}&body=${encodedBody}`);
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
        {fixedData.map((item) => (
            <Field {...item} key={item.name} />
        ))}
        <button className="contact-form__btn button" type="submit">
            Submit
        </button>
        </form>
    );
}
