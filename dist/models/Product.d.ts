export default class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, category: string);
    displayDetails(): void;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map