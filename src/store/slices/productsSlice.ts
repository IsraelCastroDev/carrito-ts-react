import { StateCreator } from "zustand";
import { Product } from "../../schemas";
import { getAllProducts } from "../../api/products";

export type ProductSliceType = {
  products: Product[];
  getProducts: () => Promise<void>;
};

export const createProductsSlice: StateCreator<ProductSliceType> = (set) => ({
  products: [],
  getProducts: async () => {
    const products = await getAllProducts();
    set({
      products,
    });
  },
});
