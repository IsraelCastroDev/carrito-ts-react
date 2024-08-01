import { useEffect } from "react";
import { useAppStore } from "./store/useAppStore";
import { Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import HomePage from "./pages/HomePage/HomePage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import Cart from "./pages/Cart/Cart";

function App() {
  const getProducts = useAppStore((state) => state.getProducts);
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<HomePage />} index />
          <Route path="/productos/:productId" element={<SingleProductPage />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
