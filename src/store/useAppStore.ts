import { create } from "zustand";
import { createProductsSlice, ProductSliceType } from "./slices/productsSlice";

export const useAppStore = create<ProductSliceType>((...a) => ({
  ...createProductsSlice(...a),
}));
