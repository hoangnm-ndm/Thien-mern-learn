import { Router } from "express";
import { productController } from "./product.controller.js";

export const productRoutes = Router();

productRoutes.post("/", productController.createOne);
productRoutes.get("/:id", productController.getById);
productRoutes.get("/slug/:slug", productController.getBySlug);
