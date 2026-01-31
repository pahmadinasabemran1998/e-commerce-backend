import {} from "express";
import { fetchProducts, fetchProductById } from "../services/apiService";
import Product from "../models/Product";
import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";
export const getAllProducts = async (_req, res) => {
    try {
        const productsData = await fetchProducts();
        const products = productsData.map((p) => {
            const product = new Product(p.id, p.title, p.description, p.price, p.discountPercentage, p.category);
            return {
                ...product,
                discountAmount: calculateDiscount(p.price, p.discountPercentage),
                taxAmount: calculateTax(p.price, p.category),
                finalPrice: product.getPriceWithDiscount() +
                    calculateTax(product.getPriceWithDiscount(), p.category)
            };
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json({ message: "Product not found" });
    }
};
//# sourceMappingURL=productController.js.map