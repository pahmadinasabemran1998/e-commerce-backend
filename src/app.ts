import express, { type Application } from "express";
import dotenv from "dotenv";
import ProductRoutes from "./routes/productRoutes";

dotenv.config();

const app: Application = express();

app.use(express.json());

// Routes
app.use("/api/products", ProductRoutes);

// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "OK" });
});

export default app;