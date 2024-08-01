import { useEffect } from "react";
import { useAppStore } from "./store/useAppStore";
import { Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import HomePage from "./pages/HomePage/HomePage";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
