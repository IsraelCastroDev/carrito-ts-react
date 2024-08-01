import { useEffect, useMemo } from "react";
import style from "./SingleProductPage.module.css";
import { useParams } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { formatCurrency } from "../../helpers";

function SingleProductPage() {
  const { productId } = useParams();
  const getProductById = useAppStore((state) => state.getProductById);
  const clearStateSingleProduct = useAppStore(
    (state) => state.clearStateSingleProduct
  );
  const singleProduct = useAppStore((state) => state.singleProduct);

  useEffect(() => {
    if (productId !== undefined) {
      getProductById(+productId);
    }

    return () => clearStateSingleProduct();
  }, [productId, getProductById, clearStateSingleProduct]);

  const isLoading = useMemo(
    () => !singleProduct || Object.keys(singleProduct).length === 0,
    [singleProduct]
  );

  return (
    <section className={style["single-product__container"]}>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div>
            <img
              src={singleProduct?.image || "ruta_a_imagen_por_defecto.jpg"}
              alt={`Image of ${singleProduct?.title || "Producto"}`}
            />
          </div>
          <div>
            <h2 className={style["single-product__title"]}>
              {singleProduct?.title || "Título no disponible"}
            </h2>
            <p className={style["single-product__price"]}>
              {singleProduct?.price !== undefined
                ? formatCurrency(singleProduct.price)
                : "Precio no disponible"}
            </p>
            <p>{singleProduct?.description || "Descripción no disponible"}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default SingleProductPage;
