import Product from "./product.model.js";

export const productService = {
  getById: async (id) => await Product.findById(id),
  getBySlug: async (slug) => await Product.findOne({ slug }),
  createOne: async (body) => await Product.create(body),
};
