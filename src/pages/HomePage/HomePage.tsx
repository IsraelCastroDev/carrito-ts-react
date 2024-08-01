import { useMemo } from "react";
import { useAppStore } from "../../store/useAppStore";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  const products = useAppStore((state) => state.products);
  const hasProducts = useMemo(() => products.length > 0, [products]);
  return (
    <>
      <ul className={styles.products}>
        {hasProducts ? (
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/productos/${product.id}`}>
                <img src={product.image} alt={`Image of ${product.title}`} />
              </Link>
              <h3 title={product.title}>{product.title}</h3>
            </li>
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </ul>
    </>
  );
}
export default HomePage;
