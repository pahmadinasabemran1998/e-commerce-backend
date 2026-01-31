import express, {} from "express";
import dotenv from "dotenv";
import ProductRoutes from "./routes/productRoutes";
dotenv.config();
const app = express();
app.use(express.json());
// Routes
app.use("/api/products", ProductRoutes);
// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "OK" });
});
export default app;
//# sourceMappingURL=app.js.map