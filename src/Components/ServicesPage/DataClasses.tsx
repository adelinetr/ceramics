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
    minValue?: number,
    maxValue: number,
    label: string,
    value: string;
}

export const PriceOptions: Prices[] = [
    {maxValue: 0, value:'Free', label: 'FREE'},
    {minValue: 5, value: '5€-25€', maxValue: 25, label: '15€-25€'},
    {minValue: 25, value: '25€-45€', maxValue: 45, label: '25€-45€'},
]

