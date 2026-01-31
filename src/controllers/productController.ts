import { type Request, type Response } from "express";
import { fetchProducts, fetchProductById } from "../services/apiService.js";
import Product from "../models/Product.js";
import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const productsData = await fetchProducts();

        const products = productsData.map((p: any) => {
            const product = new Product(
                p.id,
                p.title,
                p.description,
                p.price,
                p.discountPercentage,
                p.category
            );

            return {
                ...product,
                discountAmount: calculateDiscount(p.price, p.discountPercentage),
                taxAmount: calculateTax(p.price, p.category),
                finalPrice: 
                    product.getPriceWithDiscount() + 
                    calculateTax(product.getPriceWithDiscount(), p.category)
            };
        });

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const p = await fetchProductById(id);

        const product = new Product(
            p.id,
            p.title,
            p.description,
            p.price,
            p.discountPercentage,
            p.category
        );

        res.status(200).json({
            ...product,
            discountAmount: calculateDiscount(p.price, p.discountPercentage),
            taxAmount: calculateTax(p.price, p.category),
            finalPrice: 
                product.getPriceWithDiscount() + 
                calculateTax(product.getPriceWithDiscount(), p.category)
        });
    } catch (error) {
        res.status(404).json({ message: "Product not found" });
    }
};