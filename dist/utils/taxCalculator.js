export const calculateTax = (price, category) => {
    const rate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
    return price * rate;
};
//# sourceMappingURL=taxCalculator.js.map