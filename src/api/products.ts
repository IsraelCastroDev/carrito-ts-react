import { ax } from "../config/axios";
import { Product, ProductAPIResponse, ProductsAPIResponse } from "../schemas";

export const getAllProducts = async () => {
  const { data } = await ax("/products");
  const validateProductData = ProductsAPIResponse.safeParse(data);
  if (validateProductData.success) {
    return validateProductData.data;
  }
};

export const getSingleProduct = async (id: Product["id"]) => {
  const { data } = await ax(`/products/${id}`);
  const validateProductData = ProductAPIResponse.safeParse(data);

  if (validateProductData.success) {
    return validateProductData.data;
  }
};
