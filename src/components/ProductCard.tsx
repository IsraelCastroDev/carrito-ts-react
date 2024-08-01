import { Link } from "react-router-dom";
import { Product } from "../schemas";
import { AddToCart } from "./icons/AddToCart";
import style from "../pages/HomePage/HomePage.module.css";
import { usePersistedStore } from "../store/usePersistedStore";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const addToCart = usePersistedStore((state) => state.addToCart);

  return (
    <li key={product.id}>
      <Link to={`/productos/${product.id}`}>
        <img src={product.image} alt={`Image of ${product.title}`} />
      </Link>
      <h3 title={product.title}>{product.title}</h3>

      <div className={style["products-info"]}>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>
          <AddToCart />
        </button>
      </div>
    </li>
  );
}
export default ProductCard;
