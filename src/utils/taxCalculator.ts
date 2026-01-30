export const calculateTax = (price: number, category: string): number => {
    const rate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
    return price * rate;
};