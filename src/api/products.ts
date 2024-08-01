import { ax } from "../config/axios";
import { ProductsAPIResponse } from "../schemas";

export const getAllProducts = async () => {
  const { data } = await ax("/products");
  const validateProductData = ProductsAPIResponse.safeParse(data);
  if (validateProductData.success) {
    return validateProductData.data;
  }
};
