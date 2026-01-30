import { fetchProducts } from "./services/apiService";
import Product from "./models/Product";

const runApp = async () => {
    try {
        console.log("E-commerce backend scaffold ready");
        const productData = await fetchProducts();
        const products = productData.map(
            (p: any) => 
                new Product(p.id, p.title, p.description, p.price, p.discountPercentage, p.category)
        );

        products.forEach((p) => p.displayDetails());
    } catch (error) {
        console.error("Error initializing app:", error);
    }
};

runApp();