import { StateCreator } from "zustand";
import { Product } from "../../schemas";
import { getAllProducts, getSingleProduct } from "../../api/products";

export type ProductSliceType = {
  products: Product[];
  singleProduct: Product;
  getProducts: () => Promise<void>;
  getProductById: (productId: Product["id"]) => Promise<void>;
  clearStateSingleProduct: () => void;
};

export const createProductsSlice: StateCreator<ProductSliceType> = (set) => ({
  products: [],
  singleProduct: {} as Product,
  getProducts: async () => {
    const products = await getAllProducts();
    set({
      products,
    });
  },
  getProductById: async (id) => {
    const product = await getSingleProduct(id);
    set({
      singleProduct: product,
    });
  },
  clearStateSingleProduct: () => set({ singleProduct: {} as Product }),
});
