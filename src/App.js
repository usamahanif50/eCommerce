import "./App.css";
import DashboardHome from "./component/dashboard/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import OpenImage from "./component/dashboard/openImage/OpenImage";
import Login from "./component/dashboard/login/Login";
import Signup from "./component/dashboard/signup/Signup";
import Auth from "./component/dashboard/auth/Auth";
import { Home } from "./component/main/home/Home";
import Navbar from "./component/main/navbar/Navbar";
import ProductPage from "./component/main/productPage/ProductPage";
import WishList from "./component/main/wishlist/WishList";
function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>



        </Route>

      </Routes>

      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route element={<Auth />}>
          <Route path={"/dashboard/*"} element={<DashboardHome />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
