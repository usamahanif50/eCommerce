import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Loader } from "./loader/Loader";

const ProductPage = React.lazy(() =>
  import("../main/singleProduct/SingleProductPage")
);
const WishList = React.lazy(() => import("../main/wishlist/WishList"));
const Products = React.lazy(() => import("../main/products/products"));

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Routes>
    </Suspense>
  );
};

export default Main;
