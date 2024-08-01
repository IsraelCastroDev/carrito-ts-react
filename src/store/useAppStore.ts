import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createProductsSlice, ProductSliceType } from "./slices/productsSlice";

export const useAppStore = create<ProductSliceType>()(
  devtools((...a) => ({
    ...createProductsSlice(...a),
  }))
);
