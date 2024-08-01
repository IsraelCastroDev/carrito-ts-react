import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { IconCart } from "./icons/IconCart";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>Riplay</h1>
      </Link>

      <Link to="/carrito">
        <IconCart />
      </Link>
    </header>
  );
}
export default Header;
