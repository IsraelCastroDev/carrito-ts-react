import { useMemo } from "react";
import { useAppStore } from "../../store/useAppStore";
import styles from "./HomePage.module.css";
import ProductCard from "../../components/ProductCard";

function HomePage() {
  const products = useAppStore((state) => state.products);
  const hasProducts = useMemo(() => products.length > 0, [products]);
  return (
    <>
      <ul className={styles.products}>
        {hasProducts ? (
          products.map((product) => <ProductCard product={product} />)
        ) : (
          <p>No hay productos</p>
        )}
      </ul>
    </>
  );
}
export default HomePage;
