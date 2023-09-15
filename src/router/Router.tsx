import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../layout/Layout";
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
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
