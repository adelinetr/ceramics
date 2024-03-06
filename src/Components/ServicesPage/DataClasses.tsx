export interface ClassesOption {
    value: string;
    label:string
}

export const ClassesOptions: ClassesOption[] = [
    { value: 'Introduction to Ceramics', label:'Introduction to Ceramics'},
    { value: 'Handbuilding Class', label:'Handbuilding Class'},
    { value: 'Wheel Throwing Class', label:'Wheel Throwing Class'},
    { value: 'Artistic Ceramics', label:'Artistic Ceramics'},
]

export interface Prices {
    value:string,
    label:string
}

export const PriceOptions: Prices[] = [
    {value: 'Free', label: 'Free'},
    {value: '15€-25€', label: '15€-25€'},
    {value: '25€-45€', label: '25€-45€'},
]

