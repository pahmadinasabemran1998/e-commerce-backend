export default class Product {
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
        category: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    displayDetails(): void {
        console.log(`${this.title}: ${this.description} - $${this.price}`);
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}