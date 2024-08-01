import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { CartSliceType, createCartSlice } from "./slices/cartSlice";

export const usePersistedStore = create<CartSliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createCartSlice(...a),
      }),
      {
        name: "cart-storage", // Nombre clave en el LocalStorage
        // Puedes incluir otras opciones aquí, como la serialización personalizada
      }
    )
  )
);
