export class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const handleError = (error) => {
    console.error("App error:", error);
};
//# sourceMappingURL=errorHandler.js.map