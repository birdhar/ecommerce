import Product from "../model/product_schema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getProductById = async (request, response) => {
  try {
    const pid = request.params.pid;

    const product = await Product.findOne({ id: pid });
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
