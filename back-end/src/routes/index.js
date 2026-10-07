import { Router } from "express";
import { productRoutes } from "../modules/product/product.route.js";

export const routes = Router();

// routes.use("/auth");
routes.use("/products", productRoutes);
