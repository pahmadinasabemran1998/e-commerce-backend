import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = process.env.DUMMYJSON_API;

export const fetchProducts = async (): Promise<any[]> => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}`);
        return data.products;
    } catch (error) {
        throw new Error("Failed to fetch products");
    }
};

export const fetchProductById = async (id: number): Promise<any> => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
};