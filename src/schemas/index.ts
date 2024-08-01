import { z } from "zod";

export const ProductAPIResponse = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
});
export const ProductsAPIResponse = z.array(ProductAPIResponse);

export type Product = z.infer<typeof ProductAPIResponse>;
export type ProductCart = Product & { quantity: number };
