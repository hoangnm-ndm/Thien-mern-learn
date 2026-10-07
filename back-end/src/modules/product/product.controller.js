import { productService } from "./product.service.js";

export const productController = {
  getById: async (req, res) => {
    const data = await productService.getById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Find Item successfully!",
      data,
    });
  },
  getBySlug: async (req, res) => {},
  createOne: async (req, res) => {
    const data = await productService.createOne(req.body);
    res.status(201).json({
      success: true,
      message: "Create successfully!",
      data,
    });
  },
};
