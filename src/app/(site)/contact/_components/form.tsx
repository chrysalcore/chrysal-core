'use client';

import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import Field from './field';
import formData from '@/app/(site)/contact/_lib/data/fields';

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
        [fields],
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = `Name: ${fields.name}\n\nMessage:\n${fields.description}`;
        const subject = encodeURIComponent(fields.type);
        const encodedBody = encodeURIComponent(body);

        window.open(`mailto:owner@chrysalcore.com?subject=${subject}&body=${encodedBody}`);
    };

    return (
        <form
            className="flex shrink-0 grow basis-[min(15rem,100%)] flex-col gap-4 rounded-lg bg-surface p-4"
            onSubmit={onSubmit}
        >
            {fixedData.map((item) => (
                <Field {...item} key={item.name} />
            ))}
            <button className="button-accent" type="submit">
                <Send className="h-4 w-4" aria-hidden="true" />
                Submit
            </button>
        </form>
    );
}
