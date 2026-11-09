export interface Field {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string | string[];
    minLength?: number;
    defaultValue?: string;
}

const data: Field[] = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'John Doe',
        value: '',
    },
    {
        label: 'Type',
        name: 'type',
        type: 'option',
        placeholder: '',
        value: ['Landing', 'Website'],
    },
    {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        placeholder: 'I want...',
        value: '',
    },
];

export default data;
