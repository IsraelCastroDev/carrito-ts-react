import { StateCreator } from "zustand";
import { Product, ProductCart } from "../../schemas";

export type CartSliceType = {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  deleteProduct: (productId: Product["id"]) => void;
};

export const createCartSlice: StateCreator<CartSliceType> = (set, get) => ({
  cart: [],
  addToCart: (product) => {
    const productExists = get().cart.find((item) => item.id === product.id);

    if (productExists) {
      const newCart = get().cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({
        cart: newCart,
      });
    } else {
      const newProductCart: ProductCart = {
        ...product,
        quantity: 1,
      };
      set({
        cart: [...get().cart, newProductCart],
      });
    }
  },
  deleteProduct: (id) => {
    const newCart = get().cart.filter((item) => item.id !== id);
    set({ cart: newCart });
  },
});
