export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;

    constructor(
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        category: string,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    displayDetails(): void {
        // TODO: Implement display logic
    }

    getPriceWithDiscount(): number {
        // TODO: Implement discount calculation
        return this.price;
    }
}