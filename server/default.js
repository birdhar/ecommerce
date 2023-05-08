import { products } from "./constant/data.js";
import Product from "./model/product_schema.js";

const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error While Loading Data", error.message);
  }
};

export default DefaultData;
