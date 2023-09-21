import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../layout/Layout";
import Protected from "../misc/protected/Protected";
import Cart from "./cart/Cart";
const Router = () => {
  const Categories = lazy(() => import("./categories/Categories"));
  const Login = lazy(() => import("./login/Login"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="categories/*" element={<Categories />} />
          <Route path="login" element={<Login />} />
          <Route path="*"></Route>
          <Route element={<Protected roles={"none"} />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
