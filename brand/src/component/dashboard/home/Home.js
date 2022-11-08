import React, { Suspense } from "react";
import "../home/Home.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Loader from "../loader/Loader";
import RoutesConstant from "../RoutesConstant"

const AddCategory = React.lazy(() => import("../addCategory/AddCategory"));
const ViewCategories = React.lazy(() =>
  import("../viewCategories/ViewCategories")
);
const AddProduct = React.lazy(() => import("../addProduct/AddProduct"));
const ViewProduct = React.lazy(() => import("../viewProduct/ViewProduct"));
const ViewUser = React.lazy(() => import("../viewuser/ViewUser"));
const EditProduct = React.lazy(() => import("../editProduct/EditProduct"));
const EditCategory = React.lazy(() => import("../editCategory/EditCategory"));

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <section className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path={RoutesConstant.AddCategory}
                  element={<AddCategory />}
                ></Route>
                <Route
                  path={RoutesConstant.ViewCategories}
                  element={<ViewCategories />}
                ></Route>
                <Route
                  path={RoutesConstant.AddProduct}
                  element={<AddProduct />}
                ></Route>
                <Route
                  path={RoutesConstant.ViewProduct}
                  element={<ViewProduct />}
                ></Route>
                <Route path={RoutesConstant.ViewUser} element={<ViewUser />}></Route>
                <Route
                  path={`editProduct/:id`}
                  element={<EditProduct />}
                ></Route>
                <Route
                  path={`editcategory/:id`}
                  element={<EditCategory />}
                ></Route>
              </Routes>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
