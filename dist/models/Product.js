export default class Product {
    constructor(id, title, description, price, discountPercentage, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    displayDetails() {
        console.log(`${this.title}: ${this.description} - $${this.price}`);
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}
//# sourceMappingURL=Product.js.map