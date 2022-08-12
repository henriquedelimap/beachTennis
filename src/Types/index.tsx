export interface IRaquete {
    id: number;
    quantity: number;
    img: any[];
    title: string;
    subtitle: string;
    price: {
        original: number;
        sale: number;
    };
    chips?: string[],
    year?: string
    stored: number;
    description: string;
    subDescription: string;
    weight: number;
    dimensions: number[];
    color: string[];
    material: string;
    role: {
        category: string
        brand: any
    }
}