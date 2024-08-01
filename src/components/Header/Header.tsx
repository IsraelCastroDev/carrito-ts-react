import { Link } from "react-router-dom";
import { IconCart } from "../icons/IconCart";
import { usePersistedStore } from "../../store/usePersistedStore";
import styles from "./Header.module.css";

function Header() {
  const cart = usePersistedStore((state) => state.cart);
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>Riplay</h1>
      </Link>

      <Link to="/carrito">
        <div className={styles["header-cart"]}>
          <span className={styles["header-cart__length"]}>{cart.length}</span>
          <IconCart />
        </div>
      </Link>
    </header>
  );
}
export default Header;
