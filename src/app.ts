import express, { type Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoutes from "./routes/productRoutes.js";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        credentials: true,
    })
);

// Routes
app.use("/api/products", ProductRoutes);

// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "OK" });
});

export default app;