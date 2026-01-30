export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const handleError = (error: unknown): void => {
    console.error("App error:", error);
};