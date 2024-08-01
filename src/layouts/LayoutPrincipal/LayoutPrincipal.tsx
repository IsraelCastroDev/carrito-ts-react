import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import style from "./LayoutPrincipal.module.css";

function LayoutPrincipal() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutPrincipal;
