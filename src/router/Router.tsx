import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Router = () => {
  const Categories = lazy(() => import("./categories/Categories"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="categories/*" element={<Categories />} />
        <Route path="login" />
      </Routes>
    </Suspense>
  );
};

export default Router;
