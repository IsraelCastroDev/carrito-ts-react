import { useMemo } from "react";
import { usePersistedStore } from "../../store/usePersistedStore";
import style from "./Cart.module.css";
import { formatCurrency } from "../../helpers";
import { Link } from "react-router-dom";
import { DeleteIcon } from "../../components/icons/DeleteIcon";

function Cart() {
  const cart = usePersistedStore((state) => state.cart);
  const deleteProduct = usePersistedStore((state) => state.deleteProduct);
  const cartIsEmpty = useMemo(() => cart.length === 0, [cart]);

  return (
    <section className={style["cart-container"]}>
      <div className={style["cart-info"]}>
        <h1>Carrito de compras</h1>
        {!cartIsEmpty ? (
          <ul className={style["cart-items"]}>
            {cart.map((product) => (
              <li key={product.id} className={style["cart-item"]}>
                <div className={style.info}>
                  <img src={product.image} alt="" />
                  <p>{product.title}</p>
                </div>
                <div className={style.actions}>
                  <div>
                    <p>Precio: {formatCurrency(product.price)}</p>
                    <p>
                      Subtotal:{" "}
                      {formatCurrency(product.price * product.quantity)}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className={style["icon-delete"]}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Tu carrito esta vacio</p>
        )}
      </div>

      <div className={style.resume}>
        <h2 className={style.title}>Resumen</h2>
        <div>
          <p>Subtotal: $122</p>
          <p>Total: $122</p>
        </div>

        <button>Pagar pedido</button>
        <Link className={style.link} to="/">
          Seguir comprando
        </Link>
      </div>
    </section>
  );
}
export default Cart;
